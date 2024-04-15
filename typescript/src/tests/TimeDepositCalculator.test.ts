import { TimeDeposit } from '../TimeDeposit'
import { TimeDepositCalculator } from '../TimeDepositCalculator'
import { PREMIUM_TEST_DATA, STUDENT_TEST_DATA, BASIC_TEST_DATA } from './testData';

describe('Should correctly calculate interest for student accounts', () => {
  const studentPlans: TimeDeposit[] = STUDENT_TEST_DATA.map(
    (data) => new TimeDeposit('student', data.balance, data.days),
  )  

  const calc = new TimeDepositCalculator()
  const plansWithInterest = calc.calculateInterest(studentPlans)

  plansWithInterest.forEach((item, index) => {
    test(`${item.days} days balance ${STUDENT_TEST_DATA[index].balance} should give result ${STUDENT_TEST_DATA[index].result}`, () => {
      expect(item.balance).toBe(STUDENT_TEST_DATA[index].result)
    })
  })
})

describe('Should correctly calculate interest for premium accounts', () => {
  const premiumPlans: TimeDeposit[] = PREMIUM_TEST_DATA.map(
    (data) => new TimeDeposit('premium', data.balance, data.days),
  )

  const calc = new TimeDepositCalculator()
  const plansWithInterest = calc.calculateInterest(premiumPlans)

  plansWithInterest.forEach((item, index) => {
    test(`${item.days} days balance ${PREMIUM_TEST_DATA[index].balance} should give result ${PREMIUM_TEST_DATA[index].result}`, () => {
      expect(item.balance).toBe(PREMIUM_TEST_DATA[index].result)
    })
  })
})

describe('Should correctly calculate interest for basic accounts', () => {
  const basicPlans: TimeDeposit[] = BASIC_TEST_DATA.map(
    (data) => new TimeDeposit('basic', data.balance, data.days),
  )

  const calc = new TimeDepositCalculator()
  const plansWithInterest = calc.calculateInterest(basicPlans)

  plansWithInterest.forEach((item, index) => {
    test(`${item.days} days balance ${BASIC_TEST_DATA[index].balance} should give result ${BASIC_TEST_DATA[index].result}`, () => {
      expect(item.balance).toBe(BASIC_TEST_DATA[index].result)
    })
  })
})
