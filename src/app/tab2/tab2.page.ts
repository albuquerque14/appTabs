import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public produtos=[
    { 
        id: 1, 
        produto: "Placa de Vídeo RTX 4060 EAGLE OC Gigabyte",
        preco:"R$1939,99",
        descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
        miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
        imagem:"https://images.kabum.com.br/produtos/fotos/470987/placa-de-video-rtx-4060-eagle-oc-gigabyte-nvidia-geforce-8gb-gdrr6-dlss-ray-tracing-gv-n4060eagle-oc-8gd_1687981181_gg.jpg" 
    },

    { 
      id: 2, 
      produto: "Placa de Vídeo RX 6650 XT",
      preco:"R$1349,99",
      descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
      miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
      imagem:"https://images.kabum.com.br/produtos/fotos/479539/placa-de-video-rx-6650-xt-mech-2x-8g-oc-msi-radeon-8gb-gddr6-free-sync_1700256041_gg.jpg" 
  },

  { 
    id: 3, 
    produto: "Gabinete Gamer Corsair 4000D Airflow",
    preco:"R$599,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/115451/gabinete-gamer-corsair-4000d-airflow-mid-tower-com-fan-lateral-em-vidro-temperado-preto-cc-9011200-ww_1598453151_g.jpg"
  },

  { 
    id: 4, 
    produto: "Memória Kingston Fury Beast RGB, 16GB",
    preco:"R$289,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/480529/memoria-kingston-fury-beast-rgb-16gb-3200mhz-ddr4-cl16-preto-kf432c16bb12a-16_1698350317_g.jpg"
  }, 

  { 
    id: 5, 
    produto: "Processador AMD Ryzen 5 4600G Box",
    preco:"R$680,00",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/357990/Processador-AMD-Ryzen-5-4600G-Box-1900MHz-Cache-3MB-Hexa-Core-12-Threads-100-100000147_1700854690_g.jpg"
  },
  { 
    id: 6, 
    produto: "Headset Gamer Redragon Zeus X",
    preco:"R$269,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/227818/headset-gamer-redragon-zeus-chroma-mk-ii-rgb-surround-7-1-usb-drivers-53mm-preto-vermelho-h510-rgb_1631555309_g.jpg"
  },
  { 
    id: 7, 
    produto: "SSD 1 TB Kingston NV2",
    preco:"R$309,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/380745/ssd-kingston-nv2-1-tb-m-2-2280-pcie-nvme-leitura-2-100-mb-s-e-gravacao-1-700-mb-s-snv2s-1000g_1666033119_g.jpg"
  },
  { 
    id: 8, 
    produto: "Monitor Gamer Concórdia Curvo 27p",
    preco:"R$859,00",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/430112/Monitor-Gamer-Conc-rdia-Curvo-27p-LED-Full-HD-165Hz-Freesync-Cz270f_1701890297_g.jpg"
  },
  { 
    id: 9, 
    produto: "Placa Mãe MSI A520M-A PRO",
    preco:"R$349,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/280890/placa-mae-msi-a520m-a-pro-amd-am4-matx-ddr4_1646852577_g.jpg"
  },
  { 
    id: 10, 
    produto: "Mouse Gamer Sem Fio Logitech G PRO Wireless LIGHTSPEED",
    preco:"R$599,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/107333/mouse-gamer-sem-fio-logitech-g-pro-wireless-lightspeed-rgb-lightsync-ambidestro-6-botoes-programaveis-hero-25k-910-005271_1644501564_g.jpg"
  },
  { 
    id: 11, 
    produto: "Apple AirPods Pro 2ª Geração",
    preco:"R$1799,00",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/495557/apple-airpods-pro-2-geracao-com-estojo-de-recarga-magsafe-usb-8209-c-branco-mtjv3be-a_1699533575_g.jpg"
  },
  { 
    id: 12, 
    produto: "Water Cooler Rise Mode Gamer Black",
    preco:"R$199,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/130043/water-cooler-rise-mode-gamer-black-rgb-240mm-preto-rm-wcb-02-rgb_1663776681_g.jpg"
  },
  { 
    id: 13, 
    produto: "Caixa de Som Portátil JBL Partybox 110",
    preco:"R$2099,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/249988/caixa-de-som-portatil-jbl-partybox-jblpartybox110br-led-160w-rms-bluetooth-a-prova-de-respingos-preto-28913489_1635272548_g.jpg"
  },
  { 
    id: 14, 
    produto: "Headset Gamer Corsair Void Elite Wireless",
    preco:"R$599,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/109994/headset-gamer-wireless-corsair-void-elite-rgb-7-1-som-surround-drivers-50mm-branco-ca-9011202_1583766390_g.jpg"
  },
  { 
    id: 15, 
    produto: "Tablet Samsung Galaxy S6 Lite 128GB",
    preco:"R$1899,05",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/397655/tablet-samsung-galaxy-s6-lite-128gb-wifi-4g-tela-de-10-4-android-12-cinza-sm-p619nzazzto_1668200837_g.jpg"
  },
  { 
    id: 16, 
    produto: "Console PlayStation 5 Sony",
    preco:"R$3998,91",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/sync_mirakl/357990/Processador-AMD-Ryzen-5-4600G-Box-1900MHz-Cache-3MB-Hexa-Core-12-Threads-100-100000147_1700854690_g.jpg"
  },
  { 
    id: 17, 
    produto: "Teclado Mecânico Gamer HyperX Alloy Origins Core PBT",
    preco:"R$349,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/477008/teclado-mecanico-gamer-hyperx-alloy-origins-core-pbt-rgb-switch-red-100-anti-ghosting-e-n-key-rollover-639n7aa-ac4_1699283540_g.jpg"
  },
  { 
    id: 18, 
    produto: "Smart TV 50 Polegadas Samsung Crystal UHD 4K",
    preco:"R$2.399,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/457707/smart-tv-50-polegadas-samsung-crystal-uhd-4k-3-hdmi-2-usb-bluetooth-wi-fi-gaming-hub-tela-sem-limites-alexa-built-in-un50cu8000gxzd_1696873902_g.jpg"
  },
  { 
    id: 19, 
    produto: "Processador Intel Core i7-10700K",
    preco:"R$1579,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/112996/processador-intel-core-i7-10700k-cache-16mb-3-8ghz-lga-1200-bx8070110700k_1589208569_g.jpg"
  },
  { 
    id: 20, 
    produto: "Cooler FAN Rise 120mm Vermelho",
    preco:"R$12,99",
    descricao:"Possui três ventiladores dee lâmina exclusivos de 80mm",
    miniDescricao:"Possui três ventiladores de lâmina exclusivos de 80mm",
    imagem:"https://images.kabum.com.br/produtos/fotos/96822/cooler-fan-rise-120mm-vermelho-rm-fn-01-br_1662144325_g.jpg"
  },



]
 

  constructor() {}

}
