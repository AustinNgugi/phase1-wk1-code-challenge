function taxableIncome(basicSalary,allowances)
{
    return basicSalary + allowances
}
function taxes(taxableIncome)
{
    if ( taxableIncome > 0 && taxableIncome <= 24000)
    {
        return taxableIncome-(taxableIncome*0.1);
    }
  
    if (taxableIncome >= 24001 && taxableIncome <= 32333)
{
    return taxableIncome-(taxableIncome*0.25);
}
if ( taxableIncome >32334 && taxableIncome <= 500000)
{
    return taxableIncome-(taxableIncome*0.30);
}
if (taxableIncome >= 500001 && taxableIncome <= 800000)
{
    return taxableIncome-(taxableIncome*0.325);
}
if (taxableIncome >= 800000 )
{
    return taxableIncome-(taxableIncome);
}
}
