import React, { createContext, useState, ReactNode } from 'react';

// 定义语言类型
export type Language = 'zh' | 'ja';

// 定义翻译内容接口
export interface Translations {
  [key: string]: {
    [lang in Language]: string;
  };
}

// 创建翻译内容
export const translations: Translations = {
  companyName: {
    zh: "示例科技有限公司",
    ja: "サンプルテック株式会社"
  },
  companyDescription: {
    zh: "示例科技有限公司成立于2020年，是一家专注于提供高质量信息技术解决方案的企业。我们拥有一支专业、高效、创新的团队，致力于为客户提供最优质的服务和最前沿的技术支持。",
    ja: "サンプルテック株式会社は2020年に設立された、高品質な情報技術ソリューションを提供することに特化した企業です。私たちは専門的で効率的、革新的なチームを持ち、顧客に最高品質のサービスと最先端の技術サポートを提供することに取り組んでいます。"
  },
  servicesTitle: {
    zh: "主营业务",
    ja: "主な事業内容"
  },
  service1Title: {
    zh: "软件开发",
    ja: "ソフトウェア開発"
  },
  service1Desc: {
    zh: "提供定制化的软件开发服务，满足客户的各种业务需求。",
    ja: "顧客の様々なビジネスニーズを満たすためのカスタマイズされたソフトウェア開発サービスを提供します。"
  },
  service2Title: {
    zh: "技术咨询",
    ja: "技術コンサルティング"
  },
  service2Desc: {
    zh: "专业的技术咨询服务，帮助企业解决技术难题。",
    ja: "企業が技術的課題を解決するのを支援する専門的な技術コンサルティングサービス。"
  },
  service3Title: {
    zh: "系统集成",
    ja: "システム統合"
  },
  service3Desc: {
    zh: "提供系统集成服务，优化企业IT基础设施。",
    ja: "企業のITインフラストラクチャを最適化するシステム統合サービスを提供します。"
  },
  contactTitle: {
    zh: "联系方式",
    ja: "お問い合わせ"
  },
  phone: {
    zh: "联系电话",
    ja: "電話番号"
  },
  email: {
    zh: "电子邮箱",
    ja: "メールアドレス"
  },
  address: {
    zh: "公司地址",
    ja: "会社の所在地"
  },
  footer: {
    zh: "© 2025 示例科技有限公司. 保留所有权利.",
    ja: "© 2025 サンプルテック株式会社. 全著作権所有."
  },
  home: {
    zh: "首页",
    ja: "ホーム"
  },
  about: {
    zh: "关于我们",
    ja: "会社概要"
  },
  services: {
    zh: "服务",
    ja: "サービス"
  },
  contact: {
    zh: "联系我们",
    ja: "お問い合わせ"
  }
};

// 创建语言上下文
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'zh',
  setLanguage: () => {},
  t: () => ''
});

// 创建语言提供者组件
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('zh');

  // 翻译函数
  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return React.createElement(
    LanguageContext.Provider,
    { value: { language, setLanguage, t } },
    children
  );
};