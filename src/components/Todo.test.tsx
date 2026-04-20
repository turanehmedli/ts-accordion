import {render, screen} from '@testing-library/react'
import Todo from './Todo'
import {expect, test} from 'vitest'

test('renders todo with label and description',()=>{
    render(<Todo className='flex p-5 justify-between items-center border rounded-xl' label='Buy groceries' description='Milk, Bread, Eggs' />)
    expect(screen.getByText('Buy groceries Milk, Bread, Eggs')).toBeInTheDocument()
})

