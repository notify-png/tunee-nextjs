"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Link from "next/link";

interface TagItem {
  label: string;
  slug: string;
  url: string;
  categoryLabel: string;
  categorySlug: string;
}

interface TagGlobeProps {
  items: TagItem[];
  radius?: number;
  searchQuery?: string;
  activeCategory?: string | null;
  onCategoryClick?: (slug: string | null) => void;
}

interface TagPosition {
  x: number;
  y: number;
  z: number;
}

const TagGlobe = ({
  items,
  radius = 320,
  searchQuery = "",
  activeCategory = null,
}: TagGlobeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);
  const rotationRef = useRef({ x: 0, y: 0 });
  const autoVelocityRef = useRef({ x: 0.001, y: 0.0015 });
  const isDraggingRef = useRef(false);
  const lastMouseRef = useRef({ x: 0, y: 0 });
  const dragVelocityRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef<{ x: number; y: number } | null>(null);
  const [, forceUpdate] = useState(0);

  const positions = useMemo<TagPosition[]>(() => {
    const n = items.length;
    if (n === 0) return [];
    if (n === 1) return [{ x: 0, y: 0, z: 1 }];
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    return items.map((_, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      return {
        x: Math.cos(theta) * radiusAtY,
        y,
        z: Math.sin(theta) * radiusAtY,
      };
    });
  }, [items.length]);

  const rotatePoint = useCallback((pos: TagPosition, rx: number, ry: number) => {
    const x = pos.x * Math.cos(ry) - pos.z * Math.sin(ry);
    const z = pos.x * Math.sin(ry) + pos.z * Math.cos(ry);
    const y = pos.y;
    const y2 = y * Math.cos(rx) - z * Math.sin(rx);
    const z2 = y * Math.sin(rx) + z * Math.cos(rx);
    return { x, y: y2, z: z2 };
  }, []);

  useEffect(() => {
    if (!activeCategory) {
      targetRotationRef.current = null;
      return;
    }
    const catIndices = items
      .map((item, i) => (item.categorySlug === activeCategory ? i : -1))
      .filter((i) => i >= 0);
    if (catIndices.length === 0) return;

    let cx = 0, cy = 0, cz = 0;
    for (const idx of catIndices) {
      const p = positions[idx];
      if (p) { cx += p.x; cy += p.y; cz += p.z; }
    }
    const n = catIndices.length;
    cx /= n; cy /= n; cz /= n;
    const len = Math.sqrt(cx * cx + cy * cy + cz * cz) || 1;
    cx /= len; cy /= len; cz /= len;

    const targetRy = -Math.atan2(cx, cz);
    const targetRx = Math.asin(cy);
    targetRotationRef.current = { x: targetRx, y: targetRy };
  }, [activeCategory, items, positions]);

  useEffect(() => {
    const animate = () => {
      const target = targetRotationRef.current;
      if (target) {
        const dx = target.x - rotationRef.current.x;
        const dy = target.y - rotationRef.current.y;
        rotationRef.current.x += dx * 0.06;
        rotationRef.current.y += dy * 0.06;
        if (Math.abs(dx) < 0.005 && Math.abs(dy) < 0.005) {
          rotationRef.current.x += autoVelocityRef.current.x * 0.3;
          rotationRef.current.y += autoVelocityRef.current.y * 0.3;
        }
      } else if (!isDraggingRef.current) {
        const vx = dragVelocityRef.current.x;
        const vy = dragVelocityRef.current.y;
        if (Math.abs(vx) > 0.0001 || Math.abs(vy) > 0.0001) {
          rotationRef.current.x += vx;
          rotationRef.current.y += vy;
          dragVelocityRef.current.x *= 0.96;
          dragVelocityRef.current.y *= 0.96;
        } else {
          rotationRef.current.x += autoVelocityRef.current.x;
          rotationRef.current.y += autoVelocityRef.current.y;
        }
      }
      forceUpdate((v) => v + 1);
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
    dragVelocityRef.current = { x: 0, y: 0 };
    targetRotationRef.current = null;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMouseRef.current.x;
    const dy = e.clientY - lastMouseRef.current.y;
    rotationRef.current.y += dx * 0.005;
    rotationRef.current.x += dy * 0.005;
    dragVelocityRef.current = { x: dy * 0.005, y: dx * 0.005 };
    lastMouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    isDraggingRef.current = true;
    const t = e.touches[0];
    lastMouseRef.current = { x: t.clientX, y: t.clientY };
    dragVelocityRef.current = { x: 0, y: 0 };
    targetRotationRef.current = null;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const t = e.touches[0];
    const dx = t.clientX - lastMouseRef.current.x;
    const dy = t.clientY - lastMouseRef.current.y;
    rotationRef.current.y += dx * 0.005;
    rotationRef.current.x += dy * 0.005;
    dragVelocityRef.current = { x: dy * 0.005, y: dx * 0.005 };
    lastMouseRef.current = { x: t.clientX, y: t.clientY };
  }, []);

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const q = searchQuery.toLowerCase().trim();

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none"
      style={{ height: radius * 2 + 80, cursor: isDraggingRef.current ? "grabbing" : "grab" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="absolute rounded-full border border-border/15"
        style={{
          width: radius * 2,
          height: radius * 2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      {items.map((item, i) => {
        const pos = positions[i];
        if (!pos) return null;

        const rotated = rotatePoint(pos, rotationRef.current.x, rotationRef.current.y);
        const scale = (rotated.z + 1) / 2;
        const baseOpacity = 0.2 + scale * 0.8;
        const fontSize = 11 + scale * 5;
        const zIndex = Math.round(scale * 100);
        const screenX = rotated.x * radius;
        const screenY = rotated.y * radius;

        const isMatch = q && item.label.toLowerCase().includes(q);
        const isDimmed = q && !isMatch;
        const isCatActive = activeCategory === item.categorySlug;
        const isCatDimmed = activeCategory && !isCatActive;

        let opacity = baseOpacity;
        if (isDimmed) opacity = 0.08;
        else if (isCatDimmed) opacity = baseOpacity * 0.25;
        else if (isCatActive) opacity = Math.max(baseOpacity, 0.7);

        const color =
          isMatch || isCatActive
            ? "hsl(var(--primary))"
            : `hsl(var(--foreground) / ${opacity})`;

        const weight = (isCatActive && scale > 0.4) || scale > 0.6 ? 600 : 400;

        return (
          <Link
            key={`${item.categorySlug}-${item.slug}`}
            href={item.url}
            className="absolute whitespace-nowrap font-body transition-all duration-300 hover:!text-primary hover:!opacity-100"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${screenX}px, ${screenY}px) scale(${0.7 + scale * 0.3})`,
              opacity,
              fontSize,
              zIndex,
              color,
              fontWeight: weight,
              textShadow:
                isCatActive && scale > 0.5
                  ? "0 0 24px hsl(var(--primary) / 0.25)"
                  : "none",
              pointerEvents: scale < 0.15 ? "none" : "auto",
              cursor: "pointer",
            }}
            title={`${item.label} — ${item.categoryLabel}`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default TagGlobe;
