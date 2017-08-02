"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var ListComponent = (function () {
    function ListComponent(groceryListService) {
        this.groceryListService = groceryListService;
        this.groceryList = [];
        this.grocery = "";
        this.isLoading = false;
        this.listLoaded = false;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.groceryListService.load()
            .subscribe(function (loadedGroceries) {
            loadedGroceries.forEach(function (groceryObject) {
                _this.groceryList.unshift(groceryObject);
            });
            _this.isLoading = false;
            _this.listLoaded = true;
        });
    };
    ListComponent.prototype.add = function () {
        var _this = this;
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }
        // Dismiss the keyboard
        var textField = this.groceryTextField.nativeElement;
        textField.dismissSoftInput();
        this.groceryListService.add(this.grocery)
            .subscribe(function (groceryObject) {
            _this.groceryList.unshift(groceryObject);
            _this.grocery = "";
        }, function () {
            alert({
                message: "An error occurred while adding an item to your list.",
                okButtonText: "OK"
            });
            _this.grocery = "";
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "groceryTextField", void 0);
ListComponent = __decorate([
    core_1.Component({
        selector: "list",
        templateUrl: "pages/list/list.html",
        styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
        providers: [grocery_list_service_1.GroceryListService]
    }),
    __metadata("design:paramtypes", [grocery_list_service_1.GroceryListService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrRkFBK0U7QUFTL0UsSUFBYSxhQUFhO0lBT3hCLHVCQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQU4xRCxnQkFBVyxHQUFtQixFQUFFLENBQUM7UUFDakMsWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUtuQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRTthQUMzQixTQUFTLENBQUMsVUFBQSxlQUFlO1lBQ3hCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQyxhQUFhO2dCQUNwQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFBQSxpQkF3QkM7UUF2QkMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUMvRCxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU3QixJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDdEMsU0FBUyxDQUNSLFVBQUEsYUFBYTtZQUNYLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsRUFDRDtZQUNFLEtBQUssQ0FBQztnQkFDSixPQUFPLEVBQUUsc0RBQXNEO2dCQUMvRCxZQUFZLEVBQUUsSUFBSTthQUNuQixDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDLENBQ0YsQ0FBQTtJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoREQsSUFnREM7QUEzQ2dDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3VEQUFDO0FBTGpELGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLEVBQUUscUJBQXFCLENBQUM7UUFDaEUsU0FBUyxFQUFFLENBQUMseUNBQWtCLENBQUM7S0FDaEMsQ0FBQztxQ0FRd0MseUNBQWtCO0dBUC9DLGFBQWEsQ0FnRHpCO0FBaERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHcm9jZXJ5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnlcIjtcbmltcG9ydCB7IEdyb2NlcnlMaXN0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvZ3JvY2VyeS9ncm9jZXJ5LWxpc3Quc2VydmljZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuICBncm9jZXJ5ID0gXCJcIjtcbiAgaXNMb2FkaW5nID0gZmFsc2U7IFxuICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cbn0iXX0=