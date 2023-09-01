export interface CourseInterface {
    title: string;
    subTitle?: string;
    coursePitch: string;
    subTitleParagraph?: string;
    about: string;
    keyLearningOutcome: string;
    media?: number;
    oldPrice?: number;
    currentPrice: number;
    panelMsg?: string;
    duration?: string;
    startDate: Date;
    endDate: Date;
    isCerficate: boolean;
    language?: string;
    category?: string;
    _id: string;
}