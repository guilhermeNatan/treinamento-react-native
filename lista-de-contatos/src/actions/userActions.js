export const FAVORITAR = 'FAVORITAR';
export const favoritar = people => ({
    type: FAVORITAR,
    people,
});


export const DESFAVORITAR = 'DESFAVORITAR';
export const desfavoritar = people => ({
    type: DESFAVORITAR,
    people,
});

