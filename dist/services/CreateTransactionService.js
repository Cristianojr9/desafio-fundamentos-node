"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateTransactionService = /** @class */ (function () {
    function CreateTransactionService(transactionsRepository) {
        this.transactionsRepository = transactionsRepository;
    }
    CreateTransactionService.prototype.execute = function (_a) {
        var title = _a.title, type = _a.type, value = _a.value;
        var total = this.transactionsRepository.getBalance().total;
        if (type === 'outcome' && total - value < 0) {
            throw Error('Deu ruim! o valor é maior do que o que tem em caixa');
        }
        var transaction = this.transactionsRepository.create({
            title: title,
            type: type,
            value: value,
        });
        return transaction;
    };
    return CreateTransactionService;
}());
exports.default = CreateTransactionService;
