import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { X, ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as z from 'zod'
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from '../../contexts/TransactionContext';
import { useContext } from 'react'

const newTransactionFormSchema = z.object({
    description: z.string(),
    category: z.string(),
    value: z.number(),
    type: z.enum(['income', 'outcome'])
})

type NewTransactionFormSchema = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal () {
    const { createTransaction } = useContext(TransactionsContext)

    const {register, handleSubmit, control, reset, formState: { isSubmitting }} = useForm<NewTransactionFormSchema>({
        resolver: zodResolver(newTransactionFormSchema)
    })

    async function handleAddNewTransaction (data: NewTransactionFormSchema) {
        await createTransaction(data)

        reset()
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>

                <CloseButton><X size={24} /></CloseButton>

                <form action='' onSubmit={handleSubmit(handleAddNewTransaction)}>
                    <input type='text' placeholder='Descrição' required {...register('description')} />
                    <input type='number' placeholder='Valor' required {...register('value', { valueAsNumber: true})} />
                    <input type='text' placeholder='Categoria' required {...register('category')} />

                    <Controller control={control} name='type' render={({field}) => {
                        return (
                            <TransactionType onValueChange={field.onChange} value={field.value}>
                                <TransactionTypeButton variant="income" value="income">
                                    <ArrowCircleUp size={24} />
                                    Entrada
                                </TransactionTypeButton>
                                <TransactionTypeButton variant="outcome" value="outcome">
                                    <ArrowCircleDown size={24} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionType>
                        )
                    }} />

                    <button type='submit' disabled={isSubmitting}>Cadastrar</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}
