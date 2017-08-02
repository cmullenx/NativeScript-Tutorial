"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var grocery_list_service_1 = require("../../shared/grocery/grocery-list.service");
var SocialShare = require("nativescript-social-share");
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
    ListComponent.prototype.share = function () {
        var listString = this.groceryList
            .map(function (grocery) { return grocery.name; })
            .join(", ")
            .trim();
        SocialShare.shareText(listString);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrRkFBK0U7QUFFL0UsdURBQXlEO0FBUXpELElBQWEsYUFBYTtJQU94Qix1QkFBb0Isa0JBQXNDO1FBQXRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOMUQsZ0JBQVcsR0FBbUIsRUFBRSxDQUFDO1FBQ2pDLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFLbkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsZUFBZTtZQUN4QixlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsYUFBYTtnQkFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQkFBRyxHQUFIO1FBQUEsaUJBd0JDO1FBdkJDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQixLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUM5QixNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsdUJBQXVCO1FBQ3ZCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7UUFDL0QsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFN0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ3RDLFNBQVMsQ0FDUixVQUFBLGFBQWE7WUFDWCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4QyxLQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNwQixDQUFDLEVBQ0Q7WUFDRSxLQUFLLENBQUM7Z0JBQ0osT0FBTyxFQUFFLHNEQUFzRDtnQkFDL0QsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUNGLENBQUE7SUFDTCxDQUFDO0lBRUQsNkJBQUssR0FBTDtRQUNFLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzlCLEdBQUcsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQVosQ0FBWSxDQUFDO2FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDVixJQUFJLEVBQUUsQ0FBQztRQUNWLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNILG9CQUFDO0FBQUQsQ0FBQyxBQXhERCxJQXdEQztBQW5EZ0M7SUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQzs4QkFBbUIsaUJBQVU7dURBQUM7QUFMakQsYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztRQUNoRSxTQUFTLEVBQUUsQ0FBQyx5Q0FBa0IsQ0FBQztLQUNoQyxDQUFDO3FDQVF3Qyx5Q0FBa0I7R0FQL0MsYUFBYSxDQXdEekI7QUF4RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2dyb2NlcnkvZ3JvY2VyeVwiO1xuaW1wb3J0IHsgR3JvY2VyeUxpc3RTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9ncm9jZXJ5L2dyb2NlcnktbGlzdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwicGFnZXMvbGlzdC9saXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9saXN0L2xpc3QtY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xpc3QvbGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0dyb2NlcnlMaXN0U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2NlcnlMaXN0OiBBcnJheTxHcm9jZXJ5PiA9IFtdO1xuICBncm9jZXJ5ID0gXCJcIjtcbiAgaXNMb2FkaW5nID0gZmFsc2U7IFxuICBsaXN0TG9hZGVkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncm9jZXJ5TGlzdFNlcnZpY2U6IEdyb2NlcnlMaXN0U2VydmljZSkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5ncm9jZXJ5TGlzdFNlcnZpY2UubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKGxvYWRlZEdyb2NlcmllcyA9PiB7XG4gICAgICAgIGxvYWRlZEdyb2Nlcmllcy5mb3JFYWNoKChncm9jZXJ5T2JqZWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5TGlzdC51bnNoaWZ0KGdyb2NlcnlPYmplY3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5saXN0TG9hZGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBhbGVydChcIkVudGVyIGEgZ3JvY2VyeSBpdGVtXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERpc21pc3MgdGhlIGtleWJvYXJkXG4gICAgbGV0IHRleHRGaWVsZCA9IDxUZXh0RmllbGQ+dGhpcy5ncm9jZXJ5VGV4dEZpZWxkLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGV4dEZpZWxkLmRpc21pc3NTb2Z0SW5wdXQoKTtcblxuICAgIHRoaXMuZ3JvY2VyeUxpc3RTZXJ2aWNlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBncm9jZXJ5T2JqZWN0ID0+IHtcbiAgICAgICAgICB0aGlzLmdyb2NlcnlMaXN0LnVuc2hpZnQoZ3JvY2VyeU9iamVjdCk7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGFuIGl0ZW0gdG8geW91ciBsaXN0LlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmdyb2NlcnkgPSBcIlwiO1xuICAgICAgICB9XG4gICAgICApXG4gIH1cblxuICBzaGFyZSgpIHtcbiAgICBsZXQgbGlzdFN0cmluZyA9IHRoaXMuZ3JvY2VyeUxpc3RcbiAgICAgIC5tYXAoZ3JvY2VyeSA9PiBncm9jZXJ5Lm5hbWUpXG4gICAgICAuam9pbihcIiwgXCIpXG4gICAgICAudHJpbSgpO1xuICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0U3RyaW5nKTtcbiAgfVxufSJdfQ==