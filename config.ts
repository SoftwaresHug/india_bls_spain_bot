// Auto-generated configuration for BLS Spain India AutoBot

export const config = {
  botName: "BLS Spain India",
  country: "India",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://india.blsspainvisa.com/account/login",
  centers: [
  "Delhi",
  "Noida",
  "Chandigarh",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kolkata",
  "Ahmedabad"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family Visit",
  "Study",
  "Work"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
