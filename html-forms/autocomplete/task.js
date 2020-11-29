class Autocomplete {
  constructor( container ) {
    this.container = container;
    this.input = container.querySelector( '.autocomplete__input' );// Тег select
    this.searchInput = container.querySelector( '.autocomplete__search' );//строка input
    this.list = container.querySelector( '.autocomplete__list' );//блок выбора
    this.valueContainer = container.querySelector( '.autocomplete__value' );
    this.valueElement = container.querySelector( '.autocomplete__text-content' );//строка ввода

    this.registerEvents();
  }

  registerEvents() {
    this.valueContainer.addEventListener( 'click', e => {
      this.searchInput.classList.add( 'autocomplete__search_active' );
      this.list.classList.add( 'autocomplete__list_active' );
      this.searchInput.value = this.valueElement.textContent.trim(); //убирает пробельные символы в начале и конце строки
      this.searchInput.focus();//устанавливает фокус

      this.onSearch();
    });


    this.searchInput.addEventListener( 'input', e => this.onSearch());

    this.list.addEventListener( 'click', e => {
      const { target } = e;
      if ( !target.matches( '.autocomplete__item' )) {//соответствует или нет элемент указанному css селектору
        return;
      }

      const { textContent: text } = target,
        { id: value, index } = target.dataset;

      this.onSelect({
        index,
        text,
        value
      });
    });
  }

  onSelect( item ) {
    this.input.selectedIndex = item.index;
    this.valueElement.textContent = item.text;

    this.searchInput.classList.remove( 'autocomplete__search_active' );
    this.list.classList.remove( 'autocomplete__list_active' );
  }

  onSearch() {
    const matches = this.getMatches( this.searchInput.value );

    this.renderMatches( matches );
  }

  renderMatches( matches ) {
    const html = matches.map( item => `
    	<li>
        <span class="autocomplete__item"
        	data-index="${item.index}"
          data-id="${item.value}"
        >${item.text}</span>
      </li>
    `);

    this.list.innerHTML = html.join('');
  }
print() {
  //console.log("print")
}
  getMatches( text ) { // Доработать
    let arrOption = [];
    for(let i of this.input.options) {
      if(i.textContent.includes(text)) {
        arrOption.push(i);
      }
    }
    

    return arrOption;
    
    /*[
      {
        //text: 'Чубакка',
        //value: '1'
      }
    ];*/
  }
}

new Autocomplete( document.querySelector( '.autocomplete' ));
