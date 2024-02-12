import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFormContext } from 'react-hook-form';
import { z } from 'zod';
import { FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { useContext } from 'react';
import { CyclesContext } from '../../../contexts/CyclesContext';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        id='task'
        list='task-suggestions'
        placeholder='Dê um nome para o seu projeto'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='task-suggestions'>
        <option value=''></option>
      </datalist>
      <label htmlFor='minutesAmount'>Durante</label>
      <MinutesAmountInput
        min={5}
        max={60}
        step={5}
        type='number'
        id='minutesAmount'
        disabled={!!activeCycle}
        placeholder='00'
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
      />
      <span>minutos</span>
    </FormContainer>
  );
}
