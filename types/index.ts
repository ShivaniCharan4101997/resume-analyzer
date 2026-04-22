interface Resume {
  id: string;
  companyName: string;
  jobTitle: string;
  imagePath: string;
  resumePath: string;
  feedback: {
    overallScore: number;
    ATS: {
      score: number;
      tips: Array<{ type: "good" | "improve"; tip: string }>;
    };
    toneAndStyle: {
      score: number;
      tips: Array<{
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }>;
    };
    content: {
      score: number;
      tips: Array<{
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }>;
    };
    structure: {
      score: number;
      tips: Array<{
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }>;
    };
    skills: {
      score: number;
      tips: Array<{
        type: "good" | "improve";
        tip: string;
        explanation: string;
      }>;
    };
  };
}
