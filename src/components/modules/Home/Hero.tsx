"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Users } from "lucide-react";
const Hero = () => {
  return (
    <div className=" w-full bg-white relative">
      {/* Teal Glow Background */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #14b8a6 100%)
      `,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Dark Mode Glow Background */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `radial-gradient(125% 125% at 50% 10%, #1f2937 40%, #065f46 100%)`,
          backgroundSize: "100% 100%",
        }}
      />
      {/* Your Content/Components */}
      <section
        id="home"
        className="relative pt-10 pb-20 lg:pt-24 lg:pb-22 overflow-hidden"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                Available 24/7 for Online Support
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground">
                Your Health, <br />
                {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-foreground">
                Our Priority.
              </span> */}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-800 dark:from-emerald-400 dark:to-emerald-600">
                  Our Priority.
                </span>
              </h1>

              <p className="text-xl text-foreground max-w-lg leading-relaxed">
                Experience modern healthcare from the comfort of your home.
                Connect with top specialists, get prescriptions, and track your
                health journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform"
                >
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full h-14 px-8 text-lg border-2 hover:bg-muted"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center gap-8 pt-8 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Verified
                  Doctors
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" /> 10k+ Patients
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:block"
            >
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-[3rem] transform rotate-3 scale-105 blur-2xl" />
              {/* Hero Image - Online Doctor Consultation */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000"
                  alt="Doctor Consultation"
                  className="w-full h-auto object-cover"
                />

                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-bounce duration-3000">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Top Rated</p>
                    <p className="text-xs text-slate-500">Service Quality</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
