import { Component } from '@angular/core'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'atividade_aula5b5'
    firstNumber = 0
    secondNumber = 0
    currentOperation = ''
    visibleNumber = 0

    backspaceClick() {
        if (this.visibleNumber >= 10) {
            const completeNumberStr = this.visibleNumber.toString()
            const backspacedNumber = completeNumberStr.slice(0, -1)

            this.visibleNumber = Number(backspacedNumber)
        } else if (this.visibleNumber != 0) {
            this.visibleNumber = 0
        }
    }

    numberClick(num: number) {
        if (this.visibleNumber == 0) {
            this.visibleNumber = num
        } else {
            const newNumberStr = this.visibleNumber.toString() + num
            this.visibleNumber = Number(newNumberStr)
        }
    }

    clearClick() {
        this.currentOperation = ''
        this.secondNumber = 0
        this.firstNumber = 0
        this.visibleNumber = 0
    }

    operatorClick(operator: string): void {
        if (this.visibleNumber != 0) {
            this.firstNumber = this.visibleNumber
            this.visibleNumber = 0

            this.currentOperation = operator
        }
    }

    resultClick(): void {
        if (
            this.firstNumber != 0 &&
            this.visibleNumber != 0 &&
            this.currentOperation != ''
        ) {
            this.secondNumber = this.visibleNumber

            let result = 0

            switch (this.currentOperation) {
                case '+':
                    result = this.firstNumber + this.secondNumber
                    break
                case '-':
                    result = this.firstNumber - this.secondNumber
                    break
                case '*':
                    result = this.firstNumber * this.secondNumber
                    break
                case '/':
                    result = this.firstNumber / this.secondNumber
                    break
                default:
                    result = 0
            }
            this.visibleNumber = result
            this.firstNumber = 0
            this.secondNumber = 0
            this.currentOperation = ''
        }
    }
}
