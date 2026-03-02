"use client";

import { PortfolioHeader } from './PortfolioHeader';
import { PortfolioItemsGrid } from './PortfolioItemsGrid';

const portfolioData = {
  'Financial Models': [
    {
      title: 'DCF Valuation Snapshot',
      role: 'Lead Analyst',
      tools: 'Excel, Python, VBA',
      outcome: 'Comprehensive 5-year projection model with sensitivity analysis',
      learning: 'Deep dive into equity valuation methodologies and discount rate modeling',
    },
    {
      title: 'Pro-forma Model',
      role: 'Financial Analyst',
      tools: 'Excel, VBA, SQL',
      outcome: 'Automated financial forecasting with 15+ input variables',
      learning: 'Advanced Excel automation and financial statement linkages',
    },
    {
      title: 'Investment Memo Sample',
      role: 'Investment Analyst',
      tools: 'Excel, PowerPoint, Data Studio',
      outcome: 'Complete investment thesis with 25-page supporting analysis',
      learning: 'How to present investment ideas to institutional investors',
    },
  ],
  'Dashboards': [
    {
      title: 'Interactive Excel Dashboard',
      role: 'BI Developer',
      tools: 'Excel, Power Query, Pivot Tables',
      outcome: 'Real-time KPI tracking with drill-down functionality',
      learning: 'Excel dashboard best practices and user experience optimization',
    },
    {
      title: 'Supply Chain Analytics Visual',
      role: 'Data Analyst',
      tools: 'Power BI, SQL, Tableau',
      outcome: 'Supply chain bottleneck identification saving 20% costs',
      learning: 'Data visualization for operational decision-making',
    },
  ],
  'Case Competitions': [
    {
      title: 'Excel & Dashboard Champion',
      role: 'Competitor & Coach',
      tools: 'Excel, VBA, Power Query',
      outcome: 'National competition winner with flawless model accuracy',
      learning: 'Pressure-tested problem solving and rapid financial analysis',
    },
    {
      title: 'Accounting & Valuation Runner-Up',
      role: 'Lead Presenter',
      tools: 'IFRS Standards, DCF Models, Excel',
      outcome: 'Top 3 finish in national competition',
      learning: 'IFRS application in complex valuation scenarios',
    },
    {
      title: 'PTAX ISCEA Winner (70%)',
      role: 'Strategy Lead',
      tools: 'Tax Strategy, Case Analysis, Financial Modeling',
      outcome: 'National tax case competition champion',
      learning: 'Tax planning strategy and cross-border transaction analysis',
    },
  ],
};

interface PortfolioItem {
  title: string;
  role: string;
  tools: string;
  outcome: string;
  learning: string;
}

export function PortfolioSection() {
  return (
    <section className="py-20 px-4 md:px-6 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <PortfolioHeader />

        <div className="space-y-12">
          {Object.entries(portfolioData).map(([category, items], categoryIndex) => (
            <div key={category}>
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">{category}</h3>
              <PortfolioItemsGrid
                items={items as PortfolioItem[]}
                categoryIndex={categoryIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
