  export default {
    transformDOM: ({ document }) => {
      const main = document.querySelector('main')
      const meta = {};
          
      // final cleanup
      WebImporter.DOMUtils.remove(main, [
        '.comment-respond',
        '.mashsb-container',
        '.adjacent-entry-pagination',
        '.pagination-previous',
        '.entry-comments'
      ]);
  
      const entrytitle = document.getElementsByClassName("entry-title");
      const postinfoauthor = document.getElementsByClassName("post-info-author");
      const postinfodate = document.getElementsByClassName("post-info-date");
      const titleimage = document.getElementsByClassName("selectionShareable");
      const cells = [
        ['contentTitle'],
        [entrytitle[0]],
        [postinfoauthor[0]],
        [postinfodate[0]],
        [titleimage[2]]
      ];
      const table = WebImporter.DOMUtils.createTable(cells, document);
      main.prepend(table);

      const contentsection = document.getElementsByClassName("entry-content");      
      const contentcells = [
        ['contentSection'],
        [contentsection[0]]
       ];

      const tableContent = WebImporter.DOMUtils.createTable(contentcells, document);
      main.append(tableContent);

      const cardsection1 = document.getElementsByClassName("related-post related-1");   
      const cardsection2 = document.getElementsByClassName("related-post related-2"); 
      const cardsection3 = document.getElementsByClassName("related-post related-3"); 
      const cardsection4 = document.getElementsByClassName("related-post related-4"); 
      const cardcells = [
        ['contentCards'],
        [cardsection1[0]],
        [cardsection2[0]],
        [cardsection3[0]],
        [cardsection4[0]]  
      ];
      
      if (cardsection1[0]){
        const tableCards = WebImporter.DOMUtils.createTable(cardcells, document);
        main.append(tableCards);
      }  
  

      const authorsection = document.getElementsByClassName("author-box-title");          
      const authorcell = [
        ['author'],
        [authorsection[0]]
       ];

      const tableAuthor = WebImporter.DOMUtils.createTable(authorcell, document);
      main.append(tableAuthor);


      // find the <title> element
      const title = document.querySelector('title');
      if (title) {
        meta.Title = title.innerHTML.replace(/[\n\t]/gm, '');
      }

      // find the <meta property="og:description"> element
      const desc = document.querySelector('[property="og:description"]');
      if (desc) {
        meta.Description = desc.content;
      }

      const block = WebImporter.Blocks.getMetadataBlock(document, meta);
      main.append(block);

      return main;

    },
  };