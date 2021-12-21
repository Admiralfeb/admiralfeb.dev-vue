import { IResume } from '@/models/resume';
import { apiClient } from '@/services/server';

export const fetchResume = async (): Promise<IResume | undefined> => {
  const response = await apiClient.get<IResume>(`/resume`);
  if (response.data) {
    const resume = response.data;
    const experience = resume.experience;

    // Parse Experience date period. Change from "YYYY-MM" to "{Month} {Year} - {End Month} {End Year}"
    const parsedExperience = experience.map((item) => {
      const formatter = new Intl.DateTimeFormat('en-us', {
        month: 'long',
        year: 'numeric',
      });

      const startDate = new Date(item.startDate + '-01');
      const periodStart = formatter.format(
        startDate.setMonth(startDate.getMonth() + 1)
      );

      const endDate = item.endDate ? new Date(item.endDate + '-01') : 'Current';
      const periodEnd =
        endDate === 'Current'
          ? 'Current'
          : formatter.format(endDate.setMonth(endDate.getMonth() + 1));

      const totalPeriod = `${periodStart} - ${periodEnd}`;
      item.datePeriod = totalPeriod;
      return item;
    });

    return { ...resume, experience: parsedExperience };
  }
};
