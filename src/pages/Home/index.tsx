import { HandPalm, Play } from 'phosphor-react';
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useContext } from 'react';
import { NewCycleForm } from './NewCycleForm';
import { Countdown } from './Countdown';
import { CyclesContext } from '../../contexts/CyclesContext';

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z
    .number()
    .min(1, 'O ciclo precisa ser de no mínimo 5 minutos.')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos.'),
});

type CycleSchemaType = z.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);
  const newCycleForm = useForm<CycleSchemaType>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });
  const { handleSubmit, watch, reset } = newCycleForm;

  function handleCreateNewCycle(data: CycleSchemaType) {
    createNewCycle(data);
    reset();
  }

  const task = watch('task');
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type='button'>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type='submit' disabled={isSubmitDisabled}>
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
