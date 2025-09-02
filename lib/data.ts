import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Token Listrik Prabayar",
    description: "Beli token listrik prabayar PLN dengan berbagai nominal, langsung masuk meteran.",
    price: 25000,
    category: "token-listrik",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    banner: "/pln-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 1,
        name: "Token 20.000",
        price: 21500,
        priceDiscount: 0,
        iconUrl: "/token-icon.png",
        priceInc: ["23650", "23650"],
        priceExc: ["21500", "21500"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 1,
          name: "Prabayar",
          iconUrl: "/token-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 2,
        name: "Token 50.000",
        price: 51500,
        priceDiscount: 0,
        iconUrl: "/token-icon.png",
        priceInc: ["56650", "56650"],
        priceExc: ["51500", "51500"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 1,
          name: "Prabayar",
          iconUrl: "/token-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 3,
        name: "Token 100.000",
        price: 101500,
        priceDiscount: 100000,
        iconUrl: "/token-icon.png",
        priceInc: ["111650", "111650"],
        priceExc: ["101500", "101500"],
        voucherStock: 100,
        sortOrder: 3,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 1,
          name: "Prabayar",
          iconUrl: "/token-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 4,
        name: "Token 200.000",
        price: 201500,
        priceDiscount: 0,
        iconUrl: "/token-icon.png",
        priceInc: ["221650", "221650"],
        priceExc: ["201500", "201500"],
        voucherStock: 100,
        sortOrder: 4,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 1,
          name: "Prabayar",
          iconUrl: "/token-icon.png"
        }
      }
    ]
  },
  {
    id: 2,
    name: "Tagihan Listrik Pascabayar",
    description: "Bayar tagihan listrik pascabayar PLN dengan mudah dan praktis tanpa antri.",
    price: 0,
    category: "tagihan-listrik",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    banner: "/tagihan-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 5,
        name: "Bayar Tagihan",
        price: 0,
        priceDiscount: 0,
        iconUrl: "/bill-icon.png",
        priceInc: ["0", "0"],
        priceExc: ["0", "0"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 2,
          name: "Pascabayar",
          iconUrl: "/bill-icon.png"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Pulsa Telkomsel",
    description: "Isi pulsa Telkomsel dengan berbagai nominal untuk komunikasi dan internet yang lancar.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Ftelkomsel-982486.png&w=640&q=75",
    banner: "/telkomsel-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 6,
        name: "Pulsa 5.000",
        price: 6000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6600", "6600"],
        priceExc: ["6000", "6000"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 3,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 7,
        name: "Pulsa 10.000",
        price: 11000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["12100", "12100"],
        priceExc: ["11000", "11000"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 3,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 8,
        name: "Pulsa 25.000",
        price: 26000,
        priceDiscount: 25000,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28600", "28600"],
        priceExc: ["26000", "26000"],
        voucherStock: 100,
        sortOrder: 3,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 3,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 9,
        name: "Pulsa 50.000",
        price: 51000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["56100", "56100"],
        priceExc: ["51000", "51000"],
        voucherStock: 100,
        sortOrder: 4,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 3,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 10,
        name: "Pulsa 100.000",
        price: 101000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["111100", "111100"],
        priceExc: ["101000", "101000"],
        voucherStock: 100,
        sortOrder: 5,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 3,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Pulsa XL",
    description: "Top up pulsa XL untuk kebutuhan komunikasi sehari-hari dengan harga terjangkau.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fxl-771707.png&w=640&q=75",
    banner: "/xl-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 11,
        name: "Pulsa 5.000",
        price: 6200,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6820", "6820"],
        priceExc: ["6200", "6200"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 4,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 12,
        name: "Pulsa 10.000",
        price: 11200,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["12320", "12320"],
        priceExc: ["11200", "11200"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 4,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 13,
        name: "Pulsa 25.000",
        price: 26200,
        priceDiscount: 25200,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28820", "28820"],
        priceExc: ["26200", "26200"],
        voucherStock: 100,
        sortOrder: 3,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 4,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 5,
    name: "Pulsa Axis",
    description: "Isi pulsa Axis dengan berbagai nominal untuk komunikasi dan internet yang ekonomis.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Faxis-198257.png&w=640&q=75",
    banner: "/axis-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 14,
        name: "Pulsa 5.000",
        price: 6000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6600", "6600"],
        priceExc: ["6000", "6000"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 5,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 15,
        name: "Pulsa 25.000",
        price: 26000,
        priceDiscount: 25000,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28600", "28600"],
        priceExc: ["26000", "26000"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 5,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Pulsa Smartfren",
    description: "Top up pulsa Smartfren untuk internet super cepat dan komunikasi lancar.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fsmartfren-366422.png&w=640&q=75",
    banner: "/smartfren-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 16,
        name: "Pulsa 5.000",
        price: 6000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6600", "6600"],
        priceExc: ["6000", "6000"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 6,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 17,
        name: "Pulsa 25.000",
        price: 26000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28600", "28600"],
        priceExc: ["26000", "26000"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 6,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 7,
    name: "Pulsa by.U",
    description: "Isi pulsa by.U untuk generasi digital dengan layanan fleksibel dan inovatif.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fbyu-339017.png&w=640&q=75",
    banner: "/byu-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 18,
        name: "Pulsa 5.000",
        price: 6000,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6600", "6600"],
        priceExc: ["6000", "6000"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 7,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 19,
        name: "Pulsa 25.000",
        price: 26000,
        priceDiscount: 25000,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28600", "28600"],
        priceExc: ["26000", "26000"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 7,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 8,
    name: "Pulsa Indosat",
    description: "Isi pulsa Indosat untuk kebutuhan telepon, SMS, dan internet dengan berbagai pilihan nominal.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Findosat-115264.png&w=640&q=75",
    banner: "/indosat-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 20,
        name: "Pulsa 5.000",
        price: 6300,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6930", "6930"],
        priceExc: ["6300", "6300"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 8,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 21,
        name: "Pulsa 25.000",
        price: 26300,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28930", "28930"],
        priceExc: ["26300", "26300"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 8,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  },
  {
    id: 9,
    name: "Pulsa THREE",
    description: "Top up pulsa THREE (3) dengan harga murah dan proses yang cepat untuk kebutuhan komunikasi Anda.",
    price: 25000,
    category: "pulsa",
    image: "https://topup.ebelanja.id/_next/image?url=https%3A%2F%2Fs3.belanjapasti.com%2Fmedia%2Fimage%2Fthree-731863.png&w=640&q=75",
    banner: "/tri-banner.jpg",
    items: [
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 22,
        name: "Pulsa 5.000",
        price: 6100,
        priceDiscount: 0,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["6710", "6710"],
        priceExc: ["6100", "6100"],
        voucherStock: 100,
        sortOrder: 1,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 9,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      },
      {
        createdDate: "2025-01-01T00:00:00.000Z",
        updatedDate: "2025-01-01T00:00:00.000Z",
        id: 23,
        name: "Pulsa 25.000",
        price: 26100,
        priceDiscount: 25100,
        iconUrl: "/pulsa-icon.png",
        priceInc: ["28710", "28710"],
        priceExc: ["26100", "26100"],
        voucherStock: 100,
        sortOrder: 2,
        isActive: true,
        variant: {
          createdDate: "2025-01-01T00:00:00.000Z",
          updatedDate: "2025-01-01T00:00:00.000Z",
          id: 9,
          name: "Reguler",
          iconUrl: "/pulsa-icon.png"
        }
      }
    ]
  }
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}; 