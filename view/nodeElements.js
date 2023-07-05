export const viewLocTable = {
  tag: "table",
  text: "",
  attributes: [
    {
      name: "class",
      value: "table",
    },
    {
      name: "id",
      value: "locTable",
    },
  ],
  children: [
    {
      tag: "tr",
      text: "",
      attributes: [],
      children: [
        {
          tag: "td",
          text: "NOM",
          attributes: [
            {
              name: "class",
              value: "locTableHead",
            },
          ],
          children: [],
        },
      ],
    },
  ],
};

export const rowTable = {
  tag: "tr",
  text: "",
  attributes: [],
  children: [
    {
      tag: "td",
      text: "",
      attributes: [],
      children: [],
    },
  ],
};

export const createNodeElement = (element) => {
  const node = document.createElement(element.tag);
  node.innerHTML = element.text;

  element.attributes.forEach((attr) => {
    node.setAttribute(attr.name, attr.value);
  });

  element.children.forEach((child) => {
    node.appendChild(createNodeElement(child));
  });

  return node;
};
