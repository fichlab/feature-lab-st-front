import cl from 'classnames';
import { FC } from 'react';
import { Text } from '../ui/Text/Text';
import s from './WorkStages.module.scss';
import { WorkStageItem } from './WorkStageItem/WorkStageItem';
import { workStages as workStagesData } from '../../_mockData/workStagesMockData';

export interface WorkStagesProps {
  className?: string;
}

export const WorkStages: FC<WorkStagesProps> = ({ className = '' }) => {
  return (
    <section className={cl(s.stages, className)}>
      <Text view="germano-3" className={s.stagesTitle} tag="h2">
        Этапы работы
      </Text>
      {workStagesData.map((stage, index) => (
        <WorkStageItem key={stage.title} stage={stage} stageNum={index + 1} />
      ))}
    </section>
  );
};
