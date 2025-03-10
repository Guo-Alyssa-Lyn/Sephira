"use client"

import { cn } from "@/lib/utils"
import { AnimatedList } from "@/components/magicui/animated-list"
import { motion } from "framer-motion"

interface FeedbackItem {
  name: string
  message: string
  icon: string
  color: string
  time: string
  role?: string
}

const feedbackMessages = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    message: "Nemesis transformed our digital presence completely. Their innovative approach and attention to detail helped us achieve a 200% increase in user engagement.",
    time: "2h ago",
    icon: "⭐",
    color: "#00C9A7",
  },
  {
    name: "Michael Chen",
    role: "CTO, E-Commerce Solutions",
    message: "The team's expertise in modern web technologies and their commitment to performance optimization resulted in a lightning-fast e-commerce platform that our customers love.",
    time: "5h ago",
    icon: "🚀",
    color: "#FFB800",
  },
  {
    name: "Emma Davis",
    role: "Marketing Director, Growth Co.",
    message: "Working with Nemesis was a game-changer. They not only built a beautiful website but also implemented SEO strategies that doubled our organic traffic.",
    time: "1d ago",
    icon: "📈",
    color: "#FF3D71",
  },
  {
    name: "David Wilson",
    role: "Founder, StartupX",
    message: "The level of professionalism and technical expertise is outstanding. They delivered a solution that perfectly aligns with our business goals.",
    time: "2d ago",
    icon: "🎯",
    color: "#1E86FF",
  },
  {
    name: "Lisa Anderson",
    role: "Product Manager, InnovateCorp",
    message: "Their responsive design and user experience expertise made our product accessible and enjoyable across all devices. The results exceeded our expectations.",
    time: "3d ago",
    icon: "💫",
    color: "#9C27B0",
  },
  {
    name: "James Brown",
    role: "Director, Digital Solutions",
    message: "Nemesis is more than just a development team - they're strategic partners who understand business needs and deliver exceptional results.",
    time: "4d ago",
    icon: "🤝",
    color: "#4CAF50",
  },
  {
    name: "Sophie Taylor",
    role: "Head of Operations, ScaleUp",
    message: "The team's ability to handle complex requirements while maintaining high performance is impressive. They're truly experts in their field.",
    time: "5d ago",
    icon: "⚡",
    color: "#FF9800",
  },
  {
    name: "Alex Thompson",
    role: "Founder, TechInnovate",
    message: "Their modern tech stack and clean code practices ensure our platform remains maintainable and scalable. A pleasure to work with!",
    time: "6d ago",
    icon: "💻",
    color: "#2196F3",
  },
]

const FeedbackCard = ({ name, message, icon, color, time, role }: FeedbackItem) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-6",
        "transition-all duration-300 ease-in-out hover:scale-[102%] hover:shadow-lg",
        "bg-white/5 backdrop-blur-sm border border-white/10",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md",
      )}
    >
      <div className="flex flex-row items-start gap-4">
        <div
          className="flex size-12 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col">
            <figcaption className="text-lg font-semibold text-white">
              {name}
            </figcaption>
            {role && (
              <span className="text-sm text-primary-purple/80">
                {role}
              </span>
            )}
          </div>
          <p className="mt-2 text-sm font-normal text-gray-300 leading-relaxed">
            {message}
          </p>
          <span className="mt-2 text-xs text-gray-400">
            {time}
          </span>
        </div>
      </div>
    </figure>
  )
}

export default function FeedbackMessages({
  className,
}: {
  className?: string
}) {
  return (
    <div className={cn("relative flex flex-col w-full", className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          Client Success Stories
        </h3>
        <p className="text-gray-300 max-w-md mx-auto">
          We love hearing from our clients! Here are some of the amazing feedback we've received.
        </p>
      </motion.div>

      <div className="relative flex h-[500px] w-full flex-col overflow-hidden">
        <AnimatedList delay={4000}>
          {feedbackMessages.map((item, idx) => (
            <FeedbackCard {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  )
} 