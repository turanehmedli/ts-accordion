import {render, screen, fireEvent} from '@testing-library/react'
import Button from './Button'
import {expect, test, vi} from 'vitest'

test('renders button with text',()=>{
    render(<Button className='' label='Click me' onClick={()=>{}} />)
    expect(screen.getByText('Click me')).toBeInTheDocument()
})

test('calls onClick when clicked', ()=>{
    const handleClick = vi.fn()

    render(<Button className='' label='Click me' onClick={handleClick} />)
    fireEvent.click(screen.getByText('Click me'))

    expect(handleClick).toHaveBeenCalledTimes(1)
})