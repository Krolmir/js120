// Attributes
//   Title: Mythos
//   Author: Stephen Fry

// Behavior:
//   Get Description

// -----------------------------
// Attributes
//   Title: Me Talk Pretty One Day
//   Author: David Sedaris

// Behavior:
//   Get Description

// -----------------------------
// Attributes
// Title: Aunts aren't Gentlemen
// Author: PG Wodehouse

// Behavior:
//   Get Description

// Create three objects that represent the three books shown above. The method
// for the "Get Description" behavior should return a string like the following:

// "Me Talk Pretty one day was written by David Sedaris."

function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read: read,

    readBook() {
      this.read = true;
    },

    getDescription() {
      console.log(`${this.title} was written by ${this.author}.` +
                  `I ${this.read ? 'have' : 'haven\'t'} read it.`);
    }
  }
}

let book1 = createBook('Mythos', 'Stephen Fry');
book1.getDescription();
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
book2.getDescription();
let book3 = createBook('Aunts aren\'t Gentlemen', 'PG Wodehouse');
book3.getDescription();
