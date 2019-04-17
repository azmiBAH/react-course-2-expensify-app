import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123123'
    });
})

// editExpense
test('should setup edit/ update expense action object', () => {
    const action = editExpense('321321', { note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '321321',
        updates: {
            note: 'new note value'
        }
    });
})

//  addExpense
test('should setup add expense action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last month rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default value', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
        
    })
});