"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface SliderStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface SliderProps {
  title: string;
  subtitle?: string;
  steps: SliderStep[];
  autoPlayInterval?: number;
}

export default function Slider({
  title,
  subtitle,
  steps,
  autoPlayInterval = 5000,
}: SliderProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
    setProgress(0);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    setProgress(0);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextStep();
      }, autoPlayInterval);

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 100 / (autoPlayInterval / 100);
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, autoPlayInterval]);

  const handleMouseEnter = () => {
    if (isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        nextStep();
      }, autoPlayInterval);

      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 100 / (autoPlayInterval / 100);
        });
      }, 100);
    }
  };

  const currentStepData = steps[currentStep];

  return (
    <section
      className="text-white py-16 px-4 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-slate-300 text-lg">{subtitle}</p>}
        </motion.div>

        {/* Main Content */}
        <div className="relative">
          {/* Large Step Number */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8"
            key={currentStep}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-6xl md:text-8xl font-bold text-slate-700 select-none">
              {String(currentStepData.id).padStart(2, "0")}
            </span>
          </motion.div>

          {/* Step Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Step Image */}
            <div className="mb-8">
              <div className="relative w-full max-w-md mx-auto">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStep}
                    src={currentStepData.image}
                    alt={"Image actuelle du slide"}
                    className="w-full h-64 object-cover rounded-3xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Step Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {currentStepData.title}
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-xl mx-auto">
                  {currentStepData.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Play/Pause Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlayPause}
              className="bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500"
            >
              {isPlaying ? (
                <Pause className="h-4 w-4" />
              ) : (
                <Play className="h-4 w-4" />
              )}
            </Button>

            {/* Navigation */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevStep}
                className="bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextStep}
                className="bg-transparent border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          {isPlaying && (
            <motion.div
              className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-4 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-white rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>
          )}

          {/* Step Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToStep(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? "bg-white w-8"
                    : "bg-slate-600 hover:bg-slate-500 w-2"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
