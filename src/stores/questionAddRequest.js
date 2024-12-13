import { defineStore } from "pinia";
import { reactive } from "vue";

export const useQuestionAddRequestStore = defineStore(
  "questionAddRequest",
  () => {
    // 初始化添加题目配置
    const questionAddRequest = reactive({
      questionTitle: "",
      questionDescription: "",
      questionTags: [],
      questionAnswer: "",
      questionJudgeCase: [
        {
          input: "",
          output: "",
        },
      ],
      questionJudgeConfig: {
        timeLimit: 0,
        memoryLimit: 0,
      },
    });

    // 初始化 store 中的题目添加请求对象
    const clearQuestionAddRequest = () => {
      questionAddRequest.questionTitle = "";
      questionAddRequest.questionDescription = "";
      questionAddRequest.questionAnswer = "";
      questionAddRequest.questionTags = [];
      questionAddRequest.questionJudgeCase = [
        {
          input: "",
          output: "",
        },
      ];
      questionAddRequest.questionJudgeConfig = {
        timeLimit: 0,
        memoryLimit: 0,
      };
    };
    return {
      questionAddRequest,
      clearQuestionAddRequest,
    };
  },
  {
    persist: {
      enabled: true, // 开启持久化
      strategies: [
        {
          key: "question-add-request",
          storage: localStorage,
        },
      ],
    },
  }
);