"use client";

import { useEffect, useRef } from "react";

interface ConfettiCanvasProps {
    confettiesNumber?: number;
    confettiRadius?: number;
    gradientColors?: string[];
    emojies?: string[];
    svgIcon?: string | null;
}

const Utils = {
    getRandomInRange: (min: number, max: number, precision = 0): number => {
        const multiplier = 10 ** precision;
        return Math.floor((Math.random() * (max - min) + min) * multiplier) / multiplier;
    },
    getRandomItem: <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)],
    getScaleFactor: (): number => Math.log(window.innerWidth) / Math.log(1920),
    debounce: (func: (...args: any[]) => void, delay: number) => {
        let timeout: NodeJS.Timeout;
        return (...args: any[]) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    },
};

class Confetti {
    position: { x: number; y: number };
    initialPosition: { x: number; y: number };
    radius: { x: number; y: number };
    initialRadius: number;
    gradientColors: string[] | null;
    emoji: string | null;
    svgIcon: HTMLImageElement | null;
    speed: { x: number; y: number };
    finalSpeedX: number;
    rotationAngle: number;
    emojiRotationAngle: number;
    rotationSpeed: number;
    radiusYDirection: "up" | "down";
    direction: "left" | "right";
    createdAt: number;
    absCos: number;
    absSin: number;
    dragCoefficient: number;

    constructor({
        initialPosition,
        direction,
        radius,
        gradientColors,
        emojies = [],
        svgIcon = null,
    }: {
        initialPosition: { x: number; y: number };
        direction: "left" | "right";
        radius: number;
        gradientColors: string[];
        emojies?: string[];
        svgIcon?: string | null;
    }) {
        const scale = Utils.getScaleFactor();
        const speedFactor = Utils.getRandomInRange(0.9, 1.7, 3) * scale;

        this.position = { ...initialPosition };
        this.initialPosition = { ...initialPosition };
        this.radius = { x: radius, y: radius };
        this.initialRadius = radius;
        this.gradientColors = gradientColors.length ? gradientColors : null;
        this.emoji = emojies.length ? Utils.getRandomItem(emojies) : null;
        this.svgIcon = null;

        if (svgIcon) {
            const img = new Image();
            img.src = svgIcon;
            img.onload = () => (this.svgIcon = img);
        }

        this.speed = { x: speedFactor, y: speedFactor };
        this.finalSpeedX = Utils.getRandomInRange(0.2, 0.6, 3);
        this.rotationSpeed = this.emoji || svgIcon ? 0.01 : Utils.getRandomInRange(0.03, 0.07, 3) * scale;
        this.dragCoefficient = Utils.getRandomInRange(0.0005, 0.0009, 6);
        this.rotationAngle = direction === "left" ? Utils.getRandomInRange(0, 0.2, 3) : Utils.getRandomInRange(-0.2, 0, 3);
        this.emojiRotationAngle = Utils.getRandomInRange(0, 2 * Math.PI);
        this.radiusYDirection = "down";

        const angle = direction === "left" ? Utils.getRandomInRange(82, 15) * (Math.PI / 180) : Utils.getRandomInRange(-15, -82) * (Math.PI / 180);
        this.absCos = Math.abs(Math.cos(angle));
        this.absSin = Math.abs(Math.sin(angle));

        const offset = Utils.getRandomInRange(-150, 0);
        this.position.x += direction === "left" ? -offset * this.absCos : offset * this.absCos;
        this.position.y -= offset * this.absSin;

        this.direction = direction;
        this.createdAt = Date.now();
    }

    draw(ctx: CanvasRenderingContext2D) {
        const scale = window.devicePixelRatio;
        const { x, y } = this.position;

        if (this.svgIcon) {
            ctx.save();
            ctx.translate(scale * x, scale * y);
            ctx.rotate(this.emojiRotationAngle);
            ctx.drawImage(this.svgIcon, -this.radius.x, -this.radius.y, this.radius.x * 2, this.radius.y * 2);
            ctx.restore();
        } else if (this.gradientColors) {
            const gradient = ctx.createLinearGradient(x, y - this.radius.y, x, y + this.radius.y);
            gradient.addColorStop(0, this.gradientColors[0]);
            gradient.addColorStop(1, this.gradientColors[1]);
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.ellipse(x * scale, y * scale, this.radius.x * scale, this.radius.y * scale, this.rotationAngle, 0, 2 * Math.PI);
            ctx.fill();
        } else if (this.emoji) {
            ctx.font = `${this.radius.x * scale}px serif`;
            ctx.save();
            ctx.translate(scale * x, scale * y);
            ctx.rotate(this.emojiRotationAngle);
            ctx.textAlign = "center";
            ctx.fillText(this.emoji, 0, this.radius.y / 2);
            ctx.restore();
        }
    }

    update(deltaTime: number, currentTime: number) {
        const elapsed = currentTime - this.createdAt;
        if (this.speed.x > this.finalSpeedX) this.speed.x -= this.dragCoefficient * deltaTime;

        this.position.x += this.speed.x * (this.direction === "left" ? -this.absCos : this.absCos) * deltaTime;
        this.position.y = this.initialPosition.y - this.speed.y * this.absSin * elapsed + 0.00125 * elapsed ** 2 / 2;

        if (!this.emoji && !this.svgIcon) {
            this.rotationSpeed -= 1e-5 * deltaTime;
            this.rotationSpeed = Math.max(this.rotationSpeed, 0);

            if (this.radiusYDirection === "down") {
                this.radius.y -= deltaTime * this.rotationSpeed;
                if (this.radius.y <= 0) {
                    this.radius.y = 0.1;
                    this.radiusYDirection = "up";
                }
            } else {
                this.radius.y += deltaTime * this.rotationSpeed;
                if (this.radius.y >= this.initialRadius) {
                    this.radius.y = this.initialRadius;
                    this.radiusYDirection = "down";
                }
            }
        }
    }

    isVisible(canvasHeight: number) {
        return this.position.y < canvasHeight + 100;
    }
}

export default function ConfettiCanvas({
    confettiesNumber = 250,
    confettiRadius = 6,
    gradientColors = ["#B7A261", "#E4D4A7"],
    emojies = [],
    svgIcon = null,
}: ConfettiCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const confettiRef = useRef<Confetti[]>([]);
    const lastTimeRef = useRef(Date.now());

    const createConfetti = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        confettiRef.current = [];

        for (let i = 0; i < confettiesNumber / 2; i++) {
            const baseY = window.innerHeight / 3 + Math.random() * (window.innerHeight * 2 / 3);
            confettiRef.current.push(
                new Confetti({ initialPosition: { x: 0, y: baseY }, direction: "right", radius: confettiRadius, gradientColors, emojies, svgIcon })
            );
            confettiRef.current.push(
                new Confetti({ initialPosition: { x: window.innerWidth, y: baseY }, direction: "left", radius: confettiRadius, gradientColors, emojies, svgIcon })
            );
        }
    };

    useEffect(() => {
        // Sirf "/" route pe chale
        if (window.location.pathname !== "/") return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth * window.devicePixelRatio;
            canvas.height = window.innerHeight * window.devicePixelRatio;
        };
        window.addEventListener("resize", Utils.debounce(resize, 200));
        resize();

        createConfetti();

        const duration = 8000; 
        const startTime = Date.now();

        const animate = () => {
            const now = Date.now();
            const delta = now - lastTimeRef.current;
            lastTimeRef.current = now;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confettiRef.current = confettiRef.current.filter((c) => {
                c.update(delta, now);
                c.draw(ctx);
                return c.isVisible(canvas.height);
            });

            if (now - startTime < duration) {
                requestAnimationFrame(animate);
            }
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []); // empty dependency -> sirf mount (first load / reload) pe chale


    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-[1000] pointer-events-none" />;
}
