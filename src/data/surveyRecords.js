// src/data/surveyRecords.js

export const surveyRecords = [
  // 1) No consent / not completed (blank product)
  {
    surveyConsent: { given: false, actionTaken: "none" },
    surveyCompleted: false,
    serviceRatingFlags: { positive: false, negative: false },
    overallServiceRating: { sentiment: "Neutral", logic: "undetermined" },
    productRatings: [
      {
        menuProductName: "",
        mentionedAs: "",
        sentiment: "Neutral",
        confidence: 0.0,
      },
    ],
    customerAdvice: { provided: false, quotedKeywords: [], summarizedInsight: "" },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 2) Berry Bliss Waffle - positive + seating advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer praised the food as 'really good' and staff as 'super nice and helpful', indicating a positive overall experience.",
    },
    productRatings: [
      {
        menuProductName: "Berry Bliss Waffle",
        mentionedAs: "Berry Waffles… the one with the mixed berries on top",
        sentiment: "Positive",
        confidence: 0.9,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe just a little more seating? It was a bit crowded today."],
      summarizedInsight:
        "Customer suggests adding more seating to improve comfort during busy times.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: true,
      irrelevantMentionsIgnored: true,
    },
  },

  // 3) Matcha + Cookies and Creme Waffle - positive + seasonal drinks advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer described experience as better than previous visit, staff friendly, and products enjoyable",
    },
    productRatings: [
      {
        menuProductName: "Matcha Latte",
        mentionedAs: "Matcha Latte",
        sentiment: "Positive",
        confidence: 1.0,
      },
      {
        menuProductName: "Cookies and Creme Waffle",
        mentionedAs: "cookies and cream waffle",
        sentiment: "Positive",
        confidence: 1.0,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["maybe have some more seasonal drinks? I’d love a mango latte in summer."],
      summarizedInsight:
        "Customer would like more seasonal drinks, suggesting interest in limited-time or special offerings beyond regular menu items.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 4) Dalgona Coffee - positive + pastries advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer praised the Dalgona Coffee, said they would return and recommend the café. No negative comments given.",
    },
    productRatings: [
      {
        menuProductName: "Dalgona Coffee",
        mentionedAs: "Dalgona Coffee",
        sentiment: "Positive",
        confidence: 1.0,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe some pastries to go with the coffee. That would be nice."],
      summarizedInsight:
        "Customer suggested offering pastries to pair with coffee to improve the overall café experience.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 5) Ube Coffee + Pina Colada - positive + more plugs advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer described products as delicious and atmosphere as good, no major complaints.",
    },
    productRatings: [
      {
        menuProductName: "Ube Coffee",
        mentionedAs: "Ube Coffee",
        sentiment: "Positive",
        confidence: 1.0,
      },
      {
        menuProductName: "Pina Colada",
        mentionedAs: "Pina Colada",
        sentiment: "Positive",
        confidence: 0.9,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe a few more plugs for laptops. I come here to work sometimes."],
      summarizedInsight:
        "Suggested adding more power outlets to improve experience for customers who work in the cafe.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 6) Hot Chocolate - positive + bigger cups advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer said hot chocolate was 'really good' and would 'definitely' come back.",
    },
    productRatings: [
      {
        menuProductName: "Hot Chocolate",
        mentionedAs: "Hot chocolate",
        sentiment: "Positive",
        confidence: 1.0,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe some bigger cups?"],
      summarizedInsight: "Customer suggested offering larger cup sizes for drinks.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 7) Chocolate Foam Coffee - positive + loyalty discount advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer described the drink as 'perfect as always' and 'really rich and smooth', indicating satisfaction with service.",
    },
    productRatings: [
      {
        menuProductName: "Chocolate Foam Coffee",
        mentionedAs: "Chocolate foam coffee, iced",
        sentiment: "Positive",
        confidence: 0.95,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe offer a loyalty discount? I come here a lot."],
      summarizedInsight: "Customer suggests a loyalty program to reward frequent visitors.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: true,
      irrelevantMentionsIgnored: true,
    },
  },

  // 8) Strawberry Lemonade positive + Berry Waffle neutral + more seating advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer described service as friendly and quick, and product experience was enjoyable.",
    },
    productRatings: [
      {
        menuProductName: "Strawberry Lemonade",
        mentionedAs: "Strawberry Lemonade",
        sentiment: "Positive",
       confidence: 1.0,
      },
      {
        menuProductName: "Berry Bliss Waffle",
        mentionedAs: "Berry Waffle",
        sentiment: "Neutral",
        confidence: 0.7,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe more seating, it was a little full."],
      summarizedInsight:
        "Customer suggests adding more seating to accommodate busy times and improve comfort.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: true,
      irrelevantMentionsIgnored: true,
    },
  },

  // 9) Matcha Latte + Berry Bliss Waffle positive + vegan options advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer described the experience as 'really good' and noted she comes every week and it 'never disappoints', indicating overall positive sentiment.",
    },
    productRatings: [
      {
        menuProductName: "Matcha Latte",
        mentionedAs: "Matcha Latte",
        sentiment: "Positive",
        confidence: 1.0,
      },
      {
        menuProductName: "Berry Bliss Waffle",
        mentionedAs: "Berry Bliss Waffle",
        sentiment: "Positive",
        confidence: 1.0,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe more vegan options. My friend is vegan and can’t enjoy as much."],
      summarizedInsight:
        "Customer suggests adding more vegan options to the menu to accommodate dietary restrictions.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: false,
      irrelevantMentionsIgnored: true,
    },
  },

  // 10) Pina Colada positive + music advice
  {
    surveyConsent: { given: true, actionTaken: "counted" },
    surveyCompleted: true,
    serviceRatingFlags: { positive: true, negative: false },
    overallServiceRating: {
      sentiment: "Positive",
      logic: "Customer praised both the drink ('Really good! Fruity and refreshing') and staff ('Super friendly'), with only a minor suggestion for music.",
    },
    productRatings: [
      {
        menuProductName: "Pina Colada",
        mentionedAs: "Pina Colada drink",
        sentiment: "Positive",
        confidence: 1.0,
      },
    ],
    customerAdvice: {
      provided: true,
      quotedKeywords: ["Maybe some music, it felt a bit quiet."],
      summarizedInsight: "Customer suggested adding background music to improve the café atmosphere.",
    },
    metadata: {
      transcriptReviewed: true,
      inferenceUsed: true,
      irrelevantMentionsIgnored: true,
    },
  },
];
