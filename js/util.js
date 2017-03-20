 let confirmToDeleteMenu = (item) => {
     if (confirm("Tem certeza que deseja remover?")) {
         if (confirm("Não tem como desfazer isso. Certeza absoluta mesmo?")) {
             if (confirm("Vou perguntar de novo: Você está certo disso?")) {
                 if (confirm("Só para te lembrar que está no seu usuário. Você vai mesmo fazer isso?")) {
                     removeItem(item);
                 }
             }
         }
     }
 };

 let setAccordion = (acc) => {
     acc.accordion({
             header: "> div > h3",
             collapsible: true,
             heightStyle: "content"
         })
         .sortable({
             axis: "y",
             handle: "h3",
             stop: function(event, ui) {
                 // IE doesn't register the blur when sorting
                 // so trigger focusout handlers to remove .ui-state-focus
                 ui.item.children("h3").triggerHandler("focusout");

                 // Refresh accordion to handle new order
                 $(this).accordion("refresh");
             }
         });
 };