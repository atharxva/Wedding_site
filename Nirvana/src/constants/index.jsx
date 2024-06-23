import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import {Link} from "react-router-dom";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Find your Nirvana", to: "/matches" },
  { label: "Your Matches", to: "/yourMatches" },
  { label: "Your Profile", to: "/profile" },
];

export const testimonials = [
  {
    user: "John Doe",
    image: user1,
    text: "Thanks to Nirvana, I found my perfect match! It was easy to navigate and connect with like-minded individuals. Highly recommended!",
  },
  {
    user: "Jane Smith",
    image: user2,
    text: "I'm so grateful to [Matrimonial Website] for helping me meet my soulmate. The platform is user-friendly, and the support team was incredibly helpful throughout my journey.",
  },
  {
    user: "David Johnson",
    image: user3,
    text: "Finding love was a breeze with [Matrimonial Website]. The profiles are genuine, and the matchmaking algorithm really works! Thank you for bringing us together",
  },
  {
    user: "Ronee Brown",
    image: user4,
    text: "Highly impressed with [Matrimonial Website]! It's secure, efficient, and most importantly, I found someone who shares my values and aspirations. Definitely worth it!",
  },
  {
    user: "Michael Wilson",
    image: user5,
    text: "I never thought I'd find the love of my life online, but [Matrimonial Website] made it possible. It's a trustworthy platform with a wide range of profiles to choose from.",
  },
  {
    user: "Emily Davis",
    image: user6,
    text: " couldn't be happier with my decision to join [Matrimonial Website]. The matches were spot-on, and I found someone who completes me. Thank you for making it so easy!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Matchmaking",
    description:
      "Get your perfect match",
  },
  {
    icon: <Fingerprint />,
    text: "Chat",
    description:
      "Chat before you meet",
  },
  {
    icon: <ShieldHalf />,
    text: "Interest Matching",
    description:
      "Match with people who have same interest as you",
  },
  {
    icon: <BatteryCharging />,
    text: "Call",
    description:
      "Call without hesitation",
  },
  {
    icon: <PlugZap />,
    text: "Your ONE",
    description:
      "Find your the one",
  },
  {
    icon: <GlobeLock />,
    text: "Safety ",
    description:
      "Safety first with all new feature shaadi todo.com",
  },
];

export const checklistItems = [
  {
    title: "Profile",
    
  },
  {
    title: "Matchmaking",
    
  },
  {
    title: "SWIPE",
   
  },
  {
    title: "CHATTING",
    
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₹0/month",
    features: [
      "Limited Profiles",
      "Limited Preferences",
      "Basic Contact Info",
      "Basic Compatibility Match",
    ],
  },
  {
    title: "Gold",
    price: "₹2000/month",
    features: [
      "Unlimited Profiles",
      "Most Preference Matches",
      "Profile Privacy",
      "Chats and Calls",
    ],
  },
  {
    title: "Diamond",
    price: "₹3500/month",
    features: [
      "Personalised Sorting",
      "Highest Profile Privac ",
      "Unlimited Connectivity Services",
      "Accurate Preference Match",
      "Get the most verified profiles only",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms & Services" },
  { href: "#", text: "Terms of Use" },

];
