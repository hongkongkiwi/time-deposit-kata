// Round accurately to a specific number of places (default: 2)
const roundToDecimal = (amount, places = 2): number => {
  const factor = Math.pow(10, places);
  return Math.round((amount + Number.EPSILON) * factor) / factor
}

abstract class TimeDepositSpecifcType {
  protected depositMinDays: number = -1 // Default is 30
  protected depositMaxDays: number = -1 // No max days default
  public interestRate: number

  public calculateInterestForMonth(days: number, balance: number): number {
    // Ensure the timedeposit is above the minimum days (if set)
    if (this.depositMinDays > 0 && days <= this.depositMinDays) {
      return 0
    }

    // Ensure the timedeposit is less than the maximum days (if set)
    if (this.depositMaxDays > 0 && days > this.depositMaxDays) {
      return 0
    }

    return roundToDecimal((balance * this.interestRate) / 12, 2)
  }
}

// All timed deposits of types must implement these at minimum
export interface ITimeDepositSpecificype {
  interestRate
  calculateInterestForMonth(days: number, balance: number): number
}

export class PremiumTimeDeposit extends TimeDepositSpecifcType implements ITimeDepositSpecificype {
  public interestRate = 0.05
  protected depositMinDays = 45
}

export class StudentTimeDeposit extends TimeDepositSpecifcType implements ITimeDepositSpecificype {
  public interestRate = 0.03
  protected depositMinDays = 30
  protected depositMaxDays = 365
}

export class BasicTimeDeposit extends TimeDepositSpecifcType implements ITimeDepositSpecificype {
  public interestRate = 0.01
  protected depositMinDays = 30
}
