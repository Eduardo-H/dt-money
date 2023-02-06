import { MagnifyingGlass } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { SearchFormContainer } from './styles';
import { useTransactions } from '../../../../hooks/useTransactions';

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useTransactions();

  const { 
    register, 
    handleSubmit, 
    formState: {
      isSubmitting
    } 
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search transactions"
        {...register('query')}
      />

      <button disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}