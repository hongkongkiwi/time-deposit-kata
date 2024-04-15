// The system should calculate the monthly interest based on the account type.
// No interest will be added to any time deposit plans for the first 30 days.
// There are 4 types of time deposit plans available within the bank: basic, student, and premium
// basic plan: 1%
// student plan: 3%
// premium plan: 5%
// Aside from the premium plan, which follows an auto-renewal strategy, all existing time deposit plans should be terminated after 1 year. After the plan is terminated, the balance of the time deposit account should become 0 as the funds will automatically be transferred to their savings account.

// only student plans are 1 year or less
// the premium plan only starts calculating interest after 45 days
// the basic plan calculates interest from day 30

import { TimeDeposit } from './TimeDeposit'
import { BasicTimeDeposit, StudentTimeDeposit, PremiumTimeDeposit, ITimeDepositSpecificype } from './TimeDepositTypes'

export class TimeDepositCalculator {
  private getInterestCalculator(planType: string): ITimeDepositSpecificype {
    switch (planType) {
      case "premium":
        return new PremiumTimeDeposit()
        break;
      case "student":
        return new StudentTimeDeposit()
        break;
      case "basic":
        return new BasicTimeDeposit()
        break;
    }
    return null
  }

  // Given a number of different timedeposits calculate the cumulative 
  // interest for them all
  public calculateInterest(deposits: TimeDeposit[]) {
    deposits.map((deposit) => {
      let interestCalculator = this.getInterestCalculator(deposit.planType)
      // Check for unknown plan type
      if (interestCalculator == null) {
        console.log(`Unknown plan type: ${deposit.planType}`)
        return deposit
      }

      // Update our new balance
      deposit.balance += interestCalculator.calculateInterestForMonth(deposit.days, deposit.balance)
      return deposit
    })

    return deposits
  };
}
