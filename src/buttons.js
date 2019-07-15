export default (editor, opt = {}) => {

  let pnm = editor.Panels;

  // pnm.removeButton('options', 'preview')
  // pnm.removeButton('options', 'fullscreen')
  //
  // pnm.addButton('options', {
  //   id: 'mjml-import',
  //   className: 'fa fa-download',
  //   command: 'mjml-import',
  // })

  pnm.addPanel({
    id: 'my-panel',
    el: '.my_panel',
  })
  pnm.addButton('my-panel', {
    id: 'visibility',
    active: true, // active by default
    className: 'fa fa-eyes',
    label: 'Visibility',
    command: 'sw-visibility', // Built-in command
  })
  pnm.addButton('my-panel', {
    id: 'export',
    className: 'btn-open-export',
    label: 'Exp',
    command: 'export-template',
    context: 'export-template', // For grouping context of buttons from the same panel
  })
  pnm.addButton('my-panel', {
    id: 'my-button',
    className: 'fa fa-user',
    command(editor) {
      editor.Modal.setTitle('Components JSON')
        .setContent(`<textarea style="width:100%; height: 250px;">
            ${JSON.stringify(editor.getComponents())}
          </textarea>`)
        .open()
    }
  })

  // pnm.addPanel({
  //   id: 'panel-top',
  //   el: '.panel__top',
  // });
  // pnm.addPanel({
  //   id: 'basic-actions',
  //   el: '.panel__basic-actions',
  //   buttons: [
  //     {
  //       id: 'visibility',
  //       active: true, // active by default
  //       className: 'btn-toggle-borders',
  //       label: '<u>B</u>',
  //       command: 'sw-visibility', // Built-in command
  //     }, {
  //       id: 'export',
  //       className: 'btn-open-export',
  //       label: 'Exp',
  //       command: 'export-template',
  //       context: 'export-template', // For grouping context of buttons from the same panel
  //     }, {
  //       id: 'show-json',
  //       className: 'btn-show-json',
  //       label: 'JSON',
  //       context: 'show-json',
  //       command(editor) {
  //         editor.Modal.setTitle('Components JSON')
  //           .setContent(`<textarea style="width:100%; height: 250px;">
  //           ${JSON.stringify(editor.getComponents())}
  //         </textarea>`)
  //           .open()
  //       },
  //     }
  //   ],
  // })
}
