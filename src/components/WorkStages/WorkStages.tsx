import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../ui/Text/Text';
import s from './WorkStages.module.scss';
import { WorkStageItem, WorkStagesItem } from './WorkStageItem/WorkStageItem';

export interface WorkStagesProps {
  className?: string;
  stages: WorkStagesItem[];
}

export const WorkStages: FC<WorkStagesProps> = ({ stages, className = '' }) => {
  return (
    <section className={cl(s.stages, className)}>
      <Text view="title-3" className={s.stagesTitle} tag="h3">
        Этапы работы
      </Text>
      {stages.map((stage, index) => (
        <WorkStageItem key={stage.title} stage={stage} stageNum={index + 1} />
      ))}
    </section>
  );
};
