export default {
  transformDOM: ({ document }) => {
    
    const main = document.querySelector('body')
    const meta = {};
    
    // final cleanup
    WebImporter.DOMUtils.remove(main, [
      '.main-header-container',
      '.uw-sl',
      '.uw-sl__item',
      '.breadcrumb',
      '.container-leftnav',
      '.footer',
      '.footer-legal',
      '.link-leftnav-toggle'
    ]);

     // Links
     const linkscells = [
      ['links'],
      ['https://main--thermofisher--deckreyes.hlx.page/links/links.json'],
      ['<h3 id=\"list-of-links\">List of Links</h3>']
    ];
    const tableLinks = WebImporter.DOMUtils.createTable(linkscells, document);
    main.prepend(tableLinks);

    // Page Contents
    const pagetitle = document.getElementsByClassName("page-header");      
    const alertinfo = document.getElementsByClassName("alert alert-info");   
    const contentsection = document.getElementsByClassName("parsys_column cq-colctrl-default");   
    const cells = [
      ['pagecontents'],
      [pagetitle[0]],
      [alertinfo[0]],
      [contentsection[0]]
    ];
    const table = WebImporter.DOMUtils.createTable(cells, document);
    main.append(table);

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