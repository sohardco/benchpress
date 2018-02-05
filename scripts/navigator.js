//function to navigate back and forth between tables
// function navigateBackForward(event) {
//     var navigateCond = event.target;
//     var nodeTablesRendered = document.querySelectorAll('.js-table');
//     var arrTablesRendered = Array.prototype.slice.call(nodeTablesRendered);
//
//     function returnDisplayElement(element){
// 	    var regCheck = /(hidden)/gi;
// 	    if (!regCheck.test(element.classList.value)){
// 	       return element.classList.value
// 	    }
//     };
//
//     var displayIndex = arrTablesRendered.findIndex(returnDisplayElement);
//
//     switch (displayIndex) {
//         case 0:
//             prevBtn.classList.toggle('hidden', true);
//             break;
//         case 10:
//             nextBtn.classList.toggle('hidden', true);
//             break;
//         default:
//             prevBtn.classList.toggle('hidden', false);
//             nextBtn.classList.toggle('hidden', false);
//     }
//         if(displayIndex != 11){
//             switch (navigateCond.name) {
//                 case 'next':
//                     arrTablesRendered[displayIndex].classList.toggle('hidden', true);
//                     arrTablesRendered[displayIndex += 1].classList.toggle('hidden', false);
//                     break;
//                 case 'previous':
//                 arrTablesRendered[displayIndex].classList.toggle('hidden', true);
//                 arrTablesRendered[displayIndex -= 1].classList.toggle('hidden', false);
//                     break;
//                 }
//         }
//
// }
