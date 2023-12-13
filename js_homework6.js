//1.
function myBlend(arr){}
function myBlend(arr){return arr.map(i=>
[Math.random(), i]).sort().map(i=>i[1])}
console.log(myBlend([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//2.
const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};
function findValueByKey(companyName, company) {
    if (company.name === companyName) return company;

    let subCompanies = [];
    if (company.partners) {
        subCompanies = subCompanies.concat(company.partners);
    }
    if (company.clients) {
        subCompanies = subCompanies.concat(company.clients);
    }

    for (const subCompany of subCompanies) {
        const result = findValueByKey(companyName, subCompany);
        if (result) return result;
    }

    return null;
}
const companyNameToFind = 'Клієнт 1.2.3';
const result = findValueByKey(companyNameToFind, company);
if (result) {
    console.log('Знайдено компанію:', result);
} else {
    console.log('Компанію з назвою', companyNameToFind, 'не знайдено')
}