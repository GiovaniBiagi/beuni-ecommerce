import type { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from "_/components/ui/product-card";
const meta = {
  title: "Components/Product Card",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: {
        type: "number",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    slug: {
      control: {
        type: "text",
      },
    },
    description: {
      control: {
        type: "text",
      },
    },
    categories: {
      control: {
        type: "array",
      },
    },
    brand: {
      control: {
        type: "text",
      },
    },
    supplier: {
      control: {
        type: "text",
      },
    },
    image: {
      control: {
        type: "array",
      },
    },
    hasFreeShipping: {
      control: {
        type: "boolean",
      },
    },
    price: {
      control: {
        type: "number",
      },
    },
    rating: {
      control: {
        type: "number",
      },
    },
    recordId: {
      control: {
        type: "text",
      },
    },
    colorOptions: {
      control: {
        type: "array",
      },
    },
    priceLists: {
      control: {
        type: "array",
      },
    },
    minimumQuantity: {
      control: {
        type: "number",
      },
    },
    total_stock: {
      control: {
        type: "number",
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const ProductAvailable: Story = {
  args: {
    id: 19,
    name: "Camiseta Classic Tradicional",
    slug: 19,
    description:
      "Malha cardada fio 24.1. 100% algodão. Acabamento com costura simples, gola em ribana. Melhor custo benefício. Modelagem com caimento reto. Percentual de encolhimento pós lavagem: 3,70%.",
    categories: ["recGf0bDjVfyqn6WC"],
    brand: null,
    supplier: "recjDQzKNtiQJvOvI",
    image: [
      {
        id: "att5hU1fO9Vaql4gy",
        width: 500,
        height: 500,
        url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/f05xTPChmKxF2BeO3NCaGA/wUhBr1uijujNOng-shW_Nfyw1y_6Cq5NOfz_zOQVEAlIHOpHB3vzNHB8kVnmRGEqUZkP0oIeAPd4xc6m6b3HPigcFYvZIRkN3brc_QA6IVWnVx7xGbF6yHpLuqLkgOrfqgNsafTKf9827Q_1cDVSKX3SorLblkfmx8XYI38-3GTUd3Bf9RVPzCfvZLUasDOq/bDpqKnDUhmCZjAQSJigIiGHdWxZq7LEpFZM6vbqA48w",
        filename: "camiseta-masculina-classic-branca.png",
        size: 156575,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/uDlomnQzrdbU72cbQsTCRg/vlnVkabwYY0OXa-y9QzPe4tO5eJGcP431V-UWPK8WEZ12V2ehA6pDVGohl2oghI0kfp9wiJ90rzf_3fcER5K03WUu0TzyVj9Vvrg_vSTKYjFe0SaSjr6Rbk7R-7bWJImMawAZ_4OttBAAslUDJMakw/93A1Jf3KpcsGVrBLmOxTunRe1QXicTvjU2AR0OyeQSw",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/hU2SskX5KC0oz-zu2NfCGA/EVkMqUaSC0JgkpaGumWvOapTXyTsZKfP2gpBgv1RL-ySjGBk8dw_8gKeI_1ePxCHdV3Utno0xxf9u_5ndDTf1gqoodaU8taYQc4wGlsdmG-fmecnZMx9WZzfnp3t65iRUmPIzuMlN0WiEsX_ok98zg/8KsRxHHPG3TyYncoBUXd0SD5jaJQu-Qsa2Mjl7n3q-8",
            width: 500,
            height: 500,
          },
          full: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/msBT3DqM0h-5qNOL112EKA/LsUdg0YFhNnxQCfA0UWe5L0MEdHXU-h3G03J4XCJD9UMIkxtggdgtCPcrUqm8vbnxxKYqQ6vTnPSisRF6WfoFDnQ2IT8OLEyey9nSUXsovY4q8E14OCrsWXxw71l-GSslidm7Tgc8kJdr01dR73-fQ/u3_gtZeM6l8zkea7s8rCq7uIWDK1XJrLjrJCdY9Y81Q",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    hasFreeShipping: true,
    price: 43.6455,
    rating: 5,
    recordId: "recxyiy1QAWdPo96X",
    colorOptions: ["primary", "success", "warning", "danger", "info"],
    priceLists: [
      {
        lower_bound: 1,
        upper_bound: 9999999,
        value: 2.4705,
      },
    ],
    minimumQuantity: 50,
    total_stock: 10,
  },
};

export const ProductUnavailable: Story = {
  args: {
    id: 19,
    name: "Camiseta Classic Tradicional",
    slug: 19,
    description:
      "Malha cardada fio 24.1. 100% algodão. Acabamento com costura simples, gola em ribana. Melhor custo benefício. Modelagem com caimento reto. Percentual de encolhimento pós lavagem: 3,70%.",
    categories: ["recGf0bDjVfyqn6WC"],
    brand: null,
    supplier: "recjDQzKNtiQJvOvI",
    image: [
      {
        id: "att5hU1fO9Vaql4gy",
        width: 500,
        height: 500,
        url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/f05xTPChmKxF2BeO3NCaGA/wUhBr1uijujNOng-shW_Nfyw1y_6Cq5NOfz_zOQVEAlIHOpHB3vzNHB8kVnmRGEqUZkP0oIeAPd4xc6m6b3HPigcFYvZIRkN3brc_QA6IVWnVx7xGbF6yHpLuqLkgOrfqgNsafTKf9827Q_1cDVSKX3SorLblkfmx8XYI38-3GTUd3Bf9RVPzCfvZLUasDOq/bDpqKnDUhmCZjAQSJigIiGHdWxZq7LEpFZM6vbqA48w",
        filename: "camiseta-masculina-classic-branca.png",
        size: 156575,
        type: "image/png",
        thumbnails: {
          small: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/uDlomnQzrdbU72cbQsTCRg/vlnVkabwYY0OXa-y9QzPe4tO5eJGcP431V-UWPK8WEZ12V2ehA6pDVGohl2oghI0kfp9wiJ90rzf_3fcER5K03WUu0TzyVj9Vvrg_vSTKYjFe0SaSjr6Rbk7R-7bWJImMawAZ_4OttBAAslUDJMakw/93A1Jf3KpcsGVrBLmOxTunRe1QXicTvjU2AR0OyeQSw",
            width: 36,
            height: 36,
          },
          large: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/hU2SskX5KC0oz-zu2NfCGA/EVkMqUaSC0JgkpaGumWvOapTXyTsZKfP2gpBgv1RL-ySjGBk8dw_8gKeI_1ePxCHdV3Utno0xxf9u_5ndDTf1gqoodaU8taYQc4wGlsdmG-fmecnZMx9WZzfnp3t65iRUmPIzuMlN0WiEsX_ok98zg/8KsRxHHPG3TyYncoBUXd0SD5jaJQu-Qsa2Mjl7n3q-8",
            width: 500,
            height: 500,
          },
          full: {
            url: "https://v5.airtableusercontent.com/v3/u/25/25/1707976800000/msBT3DqM0h-5qNOL112EKA/LsUdg0YFhNnxQCfA0UWe5L0MEdHXU-h3G03J4XCJD9UMIkxtggdgtCPcrUqm8vbnxxKYqQ6vTnPSisRF6WfoFDnQ2IT8OLEyey9nSUXsovY4q8E14OCrsWXxw71l-GSslidm7Tgc8kJdr01dR73-fQ/u3_gtZeM6l8zkea7s8rCq7uIWDK1XJrLjrJCdY9Y81Q",
            width: 3000,
            height: 3000,
          },
        },
      },
    ],
    hasFreeShipping: true,
    price: 43.6455,
    rating: 5,
    recordId: "recxyiy1QAWdPo96X",
    colorOptions: ["primary", "success", "warning", "danger", "info"],
    priceLists: [
      {
        lower_bound: 1,
        upper_bound: 9999999,
        value: 2.4705,
      },
    ],
    minimumQuantity: 50,
    total_stock: 0,
  },
};
