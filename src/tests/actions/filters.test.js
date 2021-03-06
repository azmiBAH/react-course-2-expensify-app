import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters';

//jest
test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});


test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

// set text filter
// one passes a value ,
test('should generate text filter with a value', () => {
    const action = setTextFilter('Rent');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    });
})
// one default value 
    test('should generate text filter with a value', () => {
        const action = setTextFilter('');
        expect(action).toEqual({
            type: 'SET_TEXT_FILTER',
            text: ''
        });
    });

// sort by date
test('should sort data by date', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
})

// sort by amount
test('should sort data by amount', () => {
        expect(sortByDate()).toEqual({
            type: 'SORT_BY_DATE'
        })
    })