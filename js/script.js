// ============================================================================
// Moda Elegante - Sistema de Catálogo e Gestão de Produtos
// ============================================================================

// DADOS: Array de Produtos
const products = [
  { id: 1, nome: "Dior B22", preco: 520.00, categoria: "Calçados", imagens: ["images/Dior/Dior B22/Dior B22 (1).jpg", "images/Dior/Dior B22/Dior B22 (7).jpg", "images/Dior/Dior B22/Dior B22 (14).jpg", "images/Dior/Dior B22/Dior B22 (21).jpg", "images/Dior/Dior B22/Dior B22 (28).jpg"], descricao: "Ténis Dior B22 com design chunky e mistura de materiais premium." },
  { id: 2, nome: "Dior B23", preco: 540.00, categoria: "Calçados", imagens: ["images/Dior/Dior B23/Dior B23 (1).jpg", "images/Dior/Dior B23/Dior B23 (4).jpg", "images/Dior/Dior B23/Dior B23 (8).jpg", "images/Dior/Dior B23/Dior B23 (12).jpg", "images/Dior/Dior B23/Dior B23 (16).jpg"], descricao: "Dior B23 em canvas com transparência e sola em borracha aderente." },
  { id: 3, nome: "Dior B30 Countdown", preco: 560.00, categoria: "Calçados", imagens: ["images/Dior/Dior B30 Countdown/Dior B30 Countdown (1).jpg", "images/Dior/Dior B30 Countdown/Dior B30 Countdown (9).jpg", "images/Dior/Dior B30 Countdown/Dior B30 Countdown (18).jpg", "images/Dior/Dior B30 Countdown/Dior B30 Countdown (27).jpg", "images/Dior/Dior B30 Countdown/Dior B30 Countdown (36).jpg"], descricao: "Dior B30 Countdown com logótipo oversized e entressola leve para conforto diário." },
  { id: 4, nome: "Dior B31", preco: 545.00, categoria: "Calçados", imagens: ["images/Dior/Dior B31/Dior B31 (1).jpg", "images/Dior/Dior B31/Dior B31 (5).jpg", "images/Dior/Dior B31/Dior B31 (10).jpg", "images/Dior/Dior B31/Dior B31 (15).jpg", "images/Dior/Dior B31/Dior B31 (20).jpg"], descricao: "Dior B31 com visual futurista, mesh respirável e detalhes em borracha." },
  { id: 5, nome: "Dior B44 Blade", preco: 575.00, categoria: "Calçados", imagens: ["images/Dior/Dior B44 Blade/Dior B44 Blade (12).jpg", "images/Dior/Dior B44 Blade/Dior B44 Blade (1).jpg", "images/Dior/Dior B44 Blade/Dior B44 Blade (6).jpg", "images/Dior/Dior B44 Blade/Dior B44 Blade (18).jpg", "images/Dior/Dior B44 Blade/Dior B44 Blade (24).jpg"], descricao: "Dior B44 Blade com sola recortada em lâmina e cabedal técnico minimalista." },
  { id: 6, nome: "McQueen Oversized", preco: 420.00, categoria: "Calçados", imagens: ["images/McQueen/McQueen Oversized Sneaker/McQueen Oversized Sneaker (1).jpg", "images/McQueen/McQueen Oversized Sneaker/McQueen Oversized Sneaker (2).jpg", "images/McQueen/McQueen Oversized Sneaker/McQueen Oversized Sneaker (3).jpg", "images/McQueen/McQueen Oversized Sneaker/McQueen Oversized Sneaker (4).jpg", "images/McQueen/McQueen Oversized Sneaker/McQueen Oversized Sneaker (5).jpg"], descricao: "Sneaker Alexander McQueen Oversized com sola alta e acabamento premium." },
  { id: 7, nome: "McQueen Tread Slick", preco: 460.00, categoria: "Calçados", imagens: ["images/McQueen/McQueen Tread Slick/McQueen Tread Slick (2).jpg", "images/McQueen/McQueen Tread Slick/McQueen Tread Slick (1).jpg", "images/McQueen/McQueen Tread Slick/McQueen Tread Slick (3).jpg", "images/McQueen/McQueen Tread Slick/McQueen Tread Slick (4).jpg", "images/McQueen/McQueen Tread Slick/McQueen Tread Slick (5).jpg"], descricao: "Bota Tread Slick com sola tratorada e cabedal em lona estruturada." },
  { id: 8, nome: "Nike Jordan 4", preco: 310.00, categoria: "Calçados", imagens: ["images/Nike/Jordan 4/Nike Jordan 4 (1).jpg", "images/Nike/Jordan 4/Nike Jordan 4 (2).jpg", "images/Nike/Jordan 4/Nike Jordan 4 (3).jpg", "images/Nike/Jordan 4/Nike Jordan 4 (4).jpg", "images/Nike/Jordan 4/Nike Jordan 4 (5).jpg"], descricao: "Air Jordan 4 com painéis em mesh, suporte no calcanhar e sola Air para impacto." },
  { id: 9, nome: "Nike Jordan 11 Retro", preco: 330.00, categoria: "Calçados", imagens: ["images/Nike/Jordan 11 Retro/Nike Jordan 11 Retro (1).jpg", "images/Nike/Jordan 11 Retro/Nike Jordan 11 Retro (2).jpg", "images/Nike/Jordan 11 Retro/Nike Jordan 11 Retro (3).jpg", "images/Nike/Jordan 11 Retro/Nike Jordan 11 Retro (4).jpg", "images/Nike/Jordan 11 Retro/Nike Jordan 11 Retro (5).jpg"], descricao: "Air Jordan 11 Retro com verniz icónico, malha balística e sola translúcida." },
  { id: 10, nome: "Nike Jordan 12 Retro", preco: 335.00, categoria: "Calçados", imagens: ["images/Nike/Jordan 12 retro/Nike Jordan 12 retro (1).jpg", "images/Nike/Jordan 12 retro/Nike Jordan 12 retro (2).jpg", "images/Nike/Jordan 12 retro/Nike Jordan 12 retro (3).jpg", "images/Nike/Jordan 12 retro/Nike Jordan 12 retro (4).jpg", "images/Nike/Jordan 12 retro/Nike Jordan 12 retro (5).jpg"], descricao: "Air Jordan 12 Retro com cabedal em couro texturizado e sistema Zoom Air responsivo." },
  { id: 11, nome: "Nike Jordan 13 Retro", preco: 345.00, categoria: "Calçados", imagens: ["images/Nike/Jordan 13 retro/Nike Jordan 13 retro (1).jpg", "images/Nike/Jordan 13 retro/Nike Jordan 13 retro (2).jpg", "images/Nike/Jordan 13 retro/Nike Jordan 13 retro (3).jpg", "images/Nike/Jordan 13 retro/Nike Jordan 13 retro (4).jpg", "images/Nike/Jordan 13 retro/Nike Jordan 13 retro (5).jpg"], descricao: "Air Jordan 13 Retro inspirado em pantera, com cápsulas de tração e amortecimento felpudo." },
  { id: 12, nome: "Timberland Classic Boot", preco: 260.00, categoria: "Calçados", imagens: ["images/Timberland/Timberland Classic Boot/Timberland Classic Boot (2).jpg", "images/Timberland/Timberland Classic Boot/Timberland Classic Boot (1).jpg", "images/Timberland/Timberland Classic Boot/Timberland Classic Boot (3).jpg", "images/Timberland/Timberland Classic Boot/Timberland Classic Boot (4).jpg", "images/Timberland/Timberland Classic Boot/Timberland Classic Boot (5).jpg"], descricao: "Bota Timberland Classic Boot em couro premium, sola tratorada e costura reforçada." },
  { id: 13, nome: "Timberland Low-Cut", preco: 215.00, categoria: "Calçados", imagens: ["images/Timberland/Timberland Low-Cut/Timberland Low-Cut (1).jpg", "images/Timberland/Timberland Low-Cut/Timberland Low-Cut (2).jpg", "images/Timberland/Timberland Low-Cut/Timberland Low-Cut (3).jpg", "images/Timberland/Timberland Low-Cut/Timberland Low-Cut (4).jpg", "images/Timberland/Timberland Low-Cut/Timberland Low-Cut (5).jpg"], descricao: "Timberland Low-Cut com perfil baixo, conforto diário e sola aderente para cidade." },
  { id: 14, nome: "Timberland Beap", preco: 205.00, categoria: "Calçados", imagens: ["images/Timberland/Timberland Beap/Timberland Beap (2).jpg", "images/Timberland/Timberland Beap/Timberland Beap (1).jpg", "images/Timberland/Timberland Beap/Timberland Beap (3).jpg", "images/Timberland/Timberland Beap/Timberland Beap (4).jpg", "images/Timberland/Timberland Beap/Timberland Beap (5).jpg"], descricao: "Modelo Timberland Beap leve, com suporte acolchoado e visual casual robusto." },
  { id: 15, nome: "Timberland LV", preco: 235.00, categoria: "Calçados", imagens: ["images/Timberland/Timberland LV/Timberland LV (1).jpg", "images/Timberland/Timberland LV/Timberland LV (2).jpg", "images/Timberland/Timberland LV/Timberland LV (3).jpg", "images/Timberland/Timberland LV/Timberland LV (4).jpg", "images/Timberland/Timberland LV/Timberland LV (5).jpg"], descricao: "Timberland LV com acabamento luxuoso, couro de alta qualidade e sola durável." },
  { id: 16, nome: "Camisola Real Madrid", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Real Madrid/Futebol Real Madrid (1).jpg", "images/Futebol/Real Madrid/Futebol Real Madrid.jpg", "images/Futebol/Real Madrid/Futebol Real Madrid.jpg", "images/Futebol/Real Madrid/Futebol Real Madrid (1).jpg", "images/Futebol/Real Madrid/Futebol Real Madrid.jpg"], descricao: "Camisola oficial do Real Madrid com escudo bordado e tecido respirável." },
  { id: 17, nome: "Camisola Manchester United", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Manchester United/Futebol Manchester United (3).jpg", "images/Futebol/Manchester United/Futebol Manchester United (2).jpg", "images/Futebol/Manchester United/Futebol Manchester United (2).jpg", "images/Futebol/Manchester United/Futebol Manchester United (3).jpg", "images/Futebol/Manchester United/Futebol Manchester United (2).jpg"], descricao: "Camisola do Manchester United com design clássico vermelho e tecnologia Dri-FIT." },
  { id: 18, nome: "Camisola PSG", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Psg/Futebol Psg.jpg", "images/Futebol/Psg/Futebol Psg (1).jpg", "images/Futebol/Psg/Futebol Psg.jpg", "images/Futebol/Psg/Futebol Psg (1).jpg", "images/Futebol/Psg/Futebol Psg.jpg"], descricao: "Camisola do Paris Saint-Germain com emblema oficial e acabamento premium." },
  { id: 19, nome: "Camisola Liverpool", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Liverpool/Futebol Liverpool (1).jpg", "images/Futebol/Liverpool/Futebol Liverpool.jpg", "images/Futebol/Liverpool/Futebol Liverpool (2).jpg", "images/Futebol/Liverpool/Futebol Liverpool (3).jpg", "images/Futebol/Liverpool/Futebol Liverpool.jpg"], descricao: "Camisola do Liverpool FC em vermelho vibrante com escudo The Reds." },
  { id: 20, nome: "Camisola Benfica", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Benfica/Futebol Benfica (1).jpg", "images/Futebol/Benfica/Futebol Benfica.jpg", "images/Futebol/Benfica/Futebol Benfica.jpg", "images/Futebol/Benfica/Futebol Benfica (1).jpg", "images/Futebol/Benfica/Futebol Benfica.jpg"], descricao: "Camisola do Sport Lisboa e Benfica com águia dourada bordada." },
  { id: 21, nome: "Camisola Porto", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Porto/Futebol Porto.jpg", "images/Futebol/Porto/Futebol Porto (1).jpg", "images/Futebol/Porto/Futebol Porto.jpg", "images/Futebol/Porto/Futebol Porto (1).jpg", "images/Futebol/Porto/Futebol Porto.jpg"], descricao: "Camisola do FC Porto em azul e branco com dragão icónico." },
  { id: 22, nome: "Camisola Sporting", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Sporting/Futebol Sporting.jpg", "images/Futebol/Sporting/Futebol Sporting (1).jpg", "images/Futebol/Sporting/Futebol Sporting.jpg", "images/Futebol/Sporting/Futebol Sporting (1).jpg", "images/Futebol/Sporting/Futebol Sporting.jpg"], descricao: "Camisola do Sporting CP verde e branca com leão estampado." },
  { id: 23, nome: "Camisola Juventus", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Juventos/Futebol Juventos (1).jpg", "images/Futebol/Juventos/Futebol Juventos.jpg", "images/Futebol/Juventos/Futebol Juventos.jpg", "images/Futebol/Juventos/Futebol Juventos (1).jpg", "images/Futebol/Juventos/Futebol Juventos.jpg"], descricao: "Camisola da Juventus com listras pretas e brancas tradicionais." },
  { id: 24, nome: "Camisola Milan", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Milan/Futebol Milan (1).jpg", "images/Futebol/Milan/Futebol Milan.jpg", "images/Futebol/Milan/Futebol Milan.jpg", "images/Futebol/Milan/Futebol Milan (1).jpg", "images/Futebol/Milan/Futebol Milan.jpg"], descricao: "Camisola do AC Milan rossonera com escudo histórico bordado." },
  { id: 25, nome: "Camisola Bayern Munich", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Bayer Munchen/Futebol Bayer Munchen.jpg", "images/Futebol/Bayer Munchen/Futebol Bayer Munchen (1).jpg", "images/Futebol/Bayer Munchen/Futebol Bayer Munchen.jpg", "images/Futebol/Bayer Munchen/Futebol Bayer Munchen (1).jpg", "images/Futebol/Bayer Munchen/Futebol Bayer Munchen.jpg"], descricao: "Camisola do Bayern de Munique vermelha tradicional com escudo bávaro." },
  { id: 26, nome: "Camisola Flamengo", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Flamengo/Futebol Flamengo (1).jpg", "images/Futebol/Flamengo/Futebol Flamengo.jpg", "images/Futebol/Flamengo/Futebol Flamengo.jpg", "images/Futebol/Flamengo/Futebol Flamengo (1).jpg", "images/Futebol/Flamengo/Futebol Flamengo.jpg"], descricao: "Camisola do Flamengo rubro-negra com abutre icónico bordado." },
  { id: 27, nome: "Camisola Inter Miami", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Inter miami/Futebol Inter miami.jpg", "images/Futebol/Inter miami/Futebol Inter miami.jpg", "images/Futebol/Inter miami/Futebol Inter miami.jpg", "images/Futebol/Inter miami/Futebol Inter miami.jpg", "images/Futebol/Inter miami/Futebol Inter miami.jpg"], descricao: "Camisola do Inter Miami rosa moderna com escudo MLS." },
  { id: 28, nome: "Camisola Napoli", preco: 59.90, categoria: "futebol", imagens: ["images/Futebol/Napoli/Futebol Napoli.jpg", "images/Futebol/Napoli/Futebol Napoli (1).jpg", "images/Futebol/Napoli/Futebol Napoli.jpg", "images/Futebol/Napoli/Futebol Napoli (1).jpg", "images/Futebol/Napoli/Futebol Napoli.jpg"], descricao: "Camisola do SSC Napoli azul celeste com emblema napolitano." },
  { id: 29, nome: "Camisola Lakers", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Lakers/NBA Lakers (1).jpg", "images/Basquete/Lakers/NBA Lakers (2).jpg", "images/Basquete/Lakers/NBA Lakers (3).jpg", "images/Basquete/Lakers/NBA Lakers (4).jpg", "images/Basquete/Lakers/NBA Lakers (5).jpg"], descricao: "Camisola oficial dos LA Lakers em amarelo e roxo com tecnologia NBA Authentic." },
  { id: 30, nome: "Camisola Golden State Warriors", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Golden State Warriors/NBA Golden State Warriors (1).jpg", "images/Basquete/Golden State Warriors/NBA Golden State Warriors (2).jpg", "images/Basquete/Golden State Warriors/NBA Golden State Warriors (3).jpg", "images/Basquete/Golden State Warriors/NBA Golden State Warriors (1).jpg", "images/Basquete/Golden State Warriors/NBA Golden State Warriors (2).jpg"], descricao: "Camisola dos Warriors em azul e dourado, design campeão NBA." },
  { id: 31, nome: "Camisola Miami Heat", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Miami/NBA Miami.jpg", "images/Basquete/Miami/NBA Miami (1).jpg", "images/Basquete/Miami/NBA Miami.jpg", "images/Basquete/Miami/NBA Miami (1).jpg", "images/Basquete/Miami/NBA Miami.jpg"], descricao: "Camisola do Miami Heat preta com detalhes vermelhos e logótipo bordado." },
  { id: 32, nome: "Camisola Boston Celtics", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Boston celtics/NBA Boston celtics (1).jpg", "images/Basquete/Boston celtics/NBA Boston celtics (2).jpg", "images/Basquete/Boston celtics/NBA Boston celtics (3).jpg", "images/Basquete/Boston celtics/NBA Boston celtics (4).jpg", "images/Basquete/Boston celtics/NBA Boston celtics (5).jpg"], descricao: "Camisola dos Celtics verde histórica com shamrock tradicional." },
  { id: 33, nome: "Camisola Brooklyn Nets", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Brooklyn/NBA Brooklyn (1).jpg", "images/Basquete/Brooklyn/NBA Brooklyn (2).jpg", "images/Basquete/Brooklyn/NBA Brooklyn (1).jpg", "images/Basquete/Brooklyn/NBA Brooklyn (2).jpg", "images/Basquete/Brooklyn/NBA Brooklyn (1).jpg"], descricao: "Camisola dos Brooklyn Nets preta minimalista com design moderno." },
  { id: 34, nome: "Camisola Chicago Bulls", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Bulis/NBA Bulis (1).jpg", "images/Basquete/Bulis/NBA Bulis (2).jpg", "images/Basquete/Bulis/NBA Bulis (3).jpg", "images/Basquete/Bulis/NBA Bulis (4).jpg", "images/Basquete/Bulis/NBA Bulis (5).jpg"], descricao: "Camisola lendária dos Bulls vermelha com touro icónico." },
  { id: 35, nome: "Camisola Cleveland Cavaliers", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Cavs/NBA Cavs (1).jpg", "images/Basquete/Cavs/NBA Cavs (1).jpg", "images/Basquete/Cavs/NBA Cavs (1).jpg", "images/Basquete/Cavs/NBA Cavs (1).jpg", "images/Basquete/Cavs/NBA Cavs (1).jpg"], descricao: "Camisola dos Cavaliers vinho e ouro com escudo de Cleveland." },
  { id: 36, nome: "Camisola Cleveland", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Cleveland/NBA Cleveland (1).jpg", "images/Basquete/Cleveland/NBA Cleveland (1).jpg", "images/Basquete/Cleveland/NBA Cleveland (1).jpg", "images/Basquete/Cleveland/NBA Cleveland (1).jpg", "images/Basquete/Cleveland/NBA Cleveland (1).jpg"], descricao: "Camisola de Cleveland com design alternativo moderno." },
  { id: 37, nome: "Camisola Jordan", preco: 69.90, categoria: "basquete", imagens: ["images/Basquete/Jordan/NBA Jordan (1).jpg", "images/Basquete/Jordan/NBA Jordan (2).jpg", "images/Basquete/Jordan/NBA Jordan (3).jpg", "images/Basquete/Jordan/NBA Jordan (4).jpg", "images/Basquete/Jordan/NBA Jordan (5).jpg"], descricao: "Camisola Jordan Brand com Jumpman icónico e tecnologia premium." },
  { id: 38, nome: "Camisola NBA All-Star", preco: 69.90, categoria: "basquete", imagens: ["images/Basquete/AllStar/NBA AllStar (1).jpg", "images/Basquete/AllStar/NBA AllStar (2).jpg", "images/Basquete/AllStar/NBA AllStar (1).jpg", "images/Basquete/AllStar/NBA AllStar (2).jpg", "images/Basquete/AllStar/NBA AllStar (1).jpg"], descricao: "Camisola especial do NBA All-Star Game com design exclusivo." },
  { id: 39, nome: "Camisola Portland Trail Blazers", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Land/NBA Land (1).jpg", "images/Basquete/Land/NBA Land (1).jpg", "images/Basquete/Land/NBA Land (1).jpg", "images/Basquete/Land/NBA Land (1).jpg", "images/Basquete/Land/NBA Land (1).jpg"], descricao: "Camisola dos Trail Blazers vermelha e preta com pinwheel tradicional." },
  { id: 40, nome: "Camisola Orlando Magic", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Orlando/NBA Orlando (1).jpg", "images/Basquete/Orlando/NBA Orlando (2).jpg", "images/Basquete/Orlando/NBA Orlando (1).jpg", "images/Basquete/Orlando/NBA Orlando (2).jpg", "images/Basquete/Orlando/NBA Orlando (1).jpg"], descricao: "Camisola do Orlando Magic azul com estrelas mágicas." },
  { id: 41, nome: "Camisola Indiana Pacers", preco: 64.90, categoria: "basquete", imagens: ["images/Basquete/Pacers/NBA Pacers (1).jpg", "images/Basquete/Pacers/NBA Pacers (1).jpg", "images/Basquete/Pacers/NBA Pacers (1).jpg", "images/Basquete/Pacers/NBA Pacers (1).jpg", "images/Basquete/Pacers/NBA Pacers (1).jpg"], descricao: "Camisola dos Indiana Pacers amarela e azul com design retrô." },
  { id: 42, nome: "Chuteiras Adidas Futebol", preco: 89.90, categoria: "Chuteiras-Futebol", imagens: ["images/Chuteiras de futebol/Chutera Futebol Adidas/IMG-20251207-WA0012.jpg", "images/Chuteiras de futebol/Chutera Futebol Adidas/IMG-20251207-WA0190.jpg", "images/Chuteiras de futebol/Chutera Futebol Adidas/IMG-20251207-WA0191.jpg", "images/Chuteiras de futebol/Chutera Futebol Adidas/IMG-20251207-WA0012.jpg", "images/Chuteiras de futebol/Chutera Futebol Adidas/IMG-20251207-WA0190.jpg"], descricao: "Chuteiras Adidas para futebol de campo com travas para gramado." },
  { id: 43, nome: "Chuteiras Mizuno Futebol", preco: 94.90, categoria: "Chuteiras-Futebol", imagens: ["images/Chuteiras de futebol/Chutera Futebol Mizuno/IMG-20251207-WA0006.jpg", "images/Chuteiras de futebol/Chutera Futebol Mizuno/IMG-20251207-WA0006.jpg", "images/Chuteiras de futebol/Chutera Futebol Mizuno/IMG-20251207-WA0006.jpg", "images/Chuteiras de futebol/Chutera Futebol Mizuno/IMG-20251207-WA0006.jpg", "images/Chuteiras de futebol/Chutera Futebol Mizuno/IMG-20251207-WA0006.jpg"], descricao: "Chuteiras Mizuno com tecnologia japonesa para melhor controlo de bola." },
  { id: 44, nome: "Chuteiras Nike Futebol", preco: 99.90, categoria: "Chuteiras-Futebol", imagens: ["images/Chuteiras de futebol/Chutera Futebol Nike/IMG-20251207-WA0007.jpg", "images/Chuteiras de futebol/Chutera Futebol Nike/IMG-20251207-WA0008.jpg", "images/Chuteiras de futebol/Chutera Futebol Nike/IMG-20251207-WA0009.jpg", "images/Chuteiras de futebol/Chutera Futebol Nike/IMG-20251207-WA0010.jpg", "images/Chuteiras de futebol/Chutera Futebol Nike/IMG-20251207-WA0011.jpg"], descricao: "Chuteiras Nike profissionais com design aerodinâmico e máximo conforto." },
  { id: 45, nome: "Chuteiras Adidas Futsal", preco: 79.90, categoria: "Chuteiras-Futsal", imagens: ["images/Chuteiras de Futsal/Chutera Futsal Adidas/IMG-20251207-WA0173.jpg", "images/Chuteiras de Futsal/Chutera Futsal Adidas/IMG-20251207-WA0175.jpg", "images/Chuteiras de Futsal/Chutera Futsal Adidas/IMG-20251207-WA0176.jpg", "images/Chuteiras de Futsal/Chutera Futsal Adidas/IMG-20251207-WA0177.jpg", "images/Chuteiras de Futsal/Chutera Futsal Adidas/IMG-20251207-WA0178.jpg"], descricao: "Chuteiras Adidas para futsal indoor com sola antiderrapante." },
  { id: 46, nome: "Chuteiras New Balance Futsal", preco: 84.90, categoria: "Chuteiras-Futsal", imagens: ["images/Chuteiras de Futsal/Chutera Futsal New Balance/IMG-20251207-WA0186.jpg", "images/Chuteiras de Futsal/Chutera Futsal New Balance/IMG-20251207-WA0187.jpg", "images/Chuteiras de Futsal/Chutera Futsal New Balance/IMG-20251207-WA0186.jpg", "images/Chuteiras de Futsal/Chutera Futsal New Balance/IMG-20251207-WA0187.jpg", "images/Chuteiras de Futsal/Chutera Futsal New Balance/IMG-20251207-WA0186.jpg"], descricao: "Chuteiras New Balance com excelente estabilidade para jogos rápidos." },
  { id: 47, nome: "Chuteiras Nike Futsal", preco: 89.90, categoria: "Chuteiras-Futsal", imagens: ["images/Chuteiras de Futsal/Chutera Futsal Nike/IMG-20251207-WA0168.jpg", "images/Chuteiras de Futsal/Chutera Futsal Nike/IMG-20251207-WA0170.jpg", "images/Chuteiras de Futsal/Chutera Futsal Nike/IMG-20251207-WA0171.jpg", "images/Chuteiras de Futsal/Chutera Futsal Nike/IMG-20251207-WA0172.jpg", "images/Chuteiras de Futsal/Chutera Futsal Nike/IMG-20251207-WA0174.jpg"], descricao: "Chuteiras Nike para futsal com tecnologia Grip para máxima aderência." },
  { id: 48, nome: "Chuteiras Joma Futsal", preco: 74.90, categoria: "Chuteiras-Futsal", imagens: ["images/Chuteiras de Futsal/Chuteras Futsal Joma/IMG-20251207-WA0185.jpg", "images/Chuteiras de Futsal/Chuteras Futsal Joma/IMG-20251207-WA0185.jpg", "images/Chuteiras de Futsal/Chuteras Futsal Joma/IMG-20251207-WA0185.jpg", "images/Chuteiras de Futsal/Chuteras Futsal Joma/IMG-20251207-WA0185.jpg", "images/Chuteiras de Futsal/Chuteras Futsal Joma/IMG-20251207-WA0185.jpg"], descricao: "Chuteiras Joma económicas e resistentes para treinos e jogos." },
  { id: 49, nome: "Nike Air Max 95", preco: 289.90, categoria: "Calçados", imagens: ["images/Nike/Nike Air Max 95/Nike Air Max 95 (1).jpg", "images/Nike/Nike Air Max 95/Nike Air Max 95 (6).jpg", "images/Nike/Nike Air Max 95/Nike Air Max 95 (7).jpg", "images/Nike/Nike Air Max 95/Nike Air Max 95 (12).jpg", "images/Nike/Nike Air Max 95/Nike Air Max 95 (14).jpg"], descricao: "Nike Air Max 95 com design icónico dos anos 90, câmara de ar visível e conforto lendário." },
  { id: 50, nome: "Nike Air Max DN", preco: 279.90, categoria: "Calçados", imagens: ["images/Nike/Nike Air Max DN/Nike Air Max DN (5).jpg", "images/Nike/Nike Air Max DN/Nike Air Max DN (12).jpg", "images/Nike/Nike Air Max DN/Nike Air Max DN (14).jpg", "images/Nike/Nike Air Max DN/Nike Air Max DN (22).jpg", "images/Nike/Nike Air Max DN/Nike Air Max DN (26).jpg"], descricao: "Nike Air Max DN inspirado no Air Max 90, com dinâmica moderna e tec Air visível." },
  { id: 51, nome: "Casaco", preco: 189.90, categoria: "Casacos", imagens: ["images/Casacos/Casaco/Casaco (1).jpg", "images/Casacos/Casaco/Casaco (2).jpg", "images/Casacos/Casaco/Casaco (3).jpg", "images/Casacos/Casaco/Casaco (4).jpg", "images/Casacos/Casaco/Casaco (5).jpg"], descricao: "Casaco casual versátil para o dia a dia com corte confortável." },
  { id: 52, nome: "Casaco Corteiz", preco: 210.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Corteiz/Casaco Corteiz (1).jpg", "images/Casacos/Casaco Corteiz/Casaco Corteiz (2).jpg", "images/Casacos/Casaco Corteiz/Casaco Corteiz (3).jpg", "images/Casacos/Casaco Corteiz/Casaco Corteiz (4).jpg", "images/Casacos/Casaco Corteiz/Casaco Corteiz (5).jpg"], descricao: "Casaco Corteiz com visual street e múltiplos bolsos funcionais." },
  { id: 53, nome: "Casaco Dior", preco: 520.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Dior/IMG-20251214-WA0111.jpg", "images/Casacos/Casaco Dior/IMG-20251214-WA0111.jpg", "images/Casacos/Casaco Dior/IMG-20251214-WA0111.jpg", "images/Casacos/Casaco Dior/IMG-20251214-WA0111.jpg", "images/Casacos/Casaco Dior/IMG-20251214-WA0111.jpg"], descricao: "Casaco Dior premium com acabamento de luxo e corte elegante." },
  { id: 54, nome: "Casaco Gucci", preco: 540.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Gucci/IMG-20251214-WA0116.jpg", "images/Casacos/Casaco Gucci/IMG-20251214-WA0116.jpg", "images/Casacos/Casaco Gucci/IMG-20251214-WA0116.jpg", "images/Casacos/Casaco Gucci/IMG-20251214-WA0116.jpg", "images/Casacos/Casaco Gucci/IMG-20251214-WA0116.jpg"], descricao: "Casaco Gucci com design icónico e materiais de alta qualidade." },
  { id: 55, nome: "Casaco LV", preco: 560.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco LV/Casaco LV (1).jpg", "images/Casacos/Casaco LV/Casaco LV.jpg", "images/Casacos/Casaco LV/Casaco LV (1).jpg", "images/Casacos/Casaco LV/Casaco LV.jpg", "images/Casacos/Casaco LV/Casaco LV (1).jpg"], descricao: "Casaco Louis Vuitton com assinatura monograma e acabamento refinado." },
  { id: 56, nome: "Casaco Moncler", preco: 580.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Moncler/IMG-20251214-WA0118.jpg", "images/Casacos/Casaco Moncler/Casaco Moncler.jpg", "images/Casacos/Casaco Moncler/IMG-20251214-WA0118.jpg", "images/Casacos/Casaco Moncler/Casaco Moncler.jpg", "images/Casacos/Casaco Moncler/IMG-20251214-WA0118.jpg"], descricao: "Casaco Moncler acolchoado, quente e leve para climas frios." },
  { id: 57, nome: "Casaco Prada", preco: 550.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Prada/Casaco Prada.jpg", "images/Casacos/Casaco Prada/Casaco Prada.jpg", "images/Casacos/Casaco Prada/Casaco Prada.jpg", "images/Casacos/Casaco Prada/Casaco Prada.jpg", "images/Casacos/Casaco Prada/Casaco Prada.jpg"], descricao: "Casaco Prada minimalista com corte técnico e linhas limpas." },
  { id: 58, nome: "Casaco The North Face", preco: 320.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco The North Face/IMG-20251214-WA0108.jpg", "images/Casacos/Casaco The North Face/IMG-20251214-WA0110.jpg", "images/Casacos/Casaco The North Face/IMG-20251214-WA0122.jpg", "images/Casacos/Casaco The North Face/IMG-20251214-WA0125.jpg", "images/Casacos/Casaco The North Face/IMG-20251214-WA0126.jpg"], descricao: "Casaco The North Face com isolamento leve e proteção para outdoor." },
  { id: 59, nome: "Casaco Trapstar", preco: 260.00, categoria: "Casacos", imagens: ["images/Casacos/Casaco Trapstar/IMG-20251214-WA0109.jpg", "images/Casacos/Casaco Trapstar/IMG-20251214-WA0112.jpg", "images/Casacos/Casaco Trapstar/IMG-20251214-WA0115.jpg", "images/Casacos/Casaco Trapstar/IMG-20251214-WA0117.jpg", "images/Casacos/Casaco Trapstar/IMG-20251214-WA0119.jpg"], descricao: "Casaco Trapstar com estética urbana e detalhes refletivos." },
  { id: 60, nome: "Colete Trapstar", preco: 180.00, categoria: "Casacos", imagens: ["images/Casacos/Colete Trapstar/IMG-20251214-WA0120.jpg", "images/Casacos/Colete Trapstar/IMG-20251214-WA0124.jpg", "images/Casacos/Colete Trapstar/IMG-20251214-WA0120.jpg", "images/Casacos/Colete Trapstar/IMG-20251214-WA0124.jpg", "images/Casacos/Colete Trapstar/IMG-20251214-WA0120.jpg"], descricao: "Colete Trapstar leve com bolsos utilitários e ajuste confortável." },
  { id: 61, nome: "Moletom com capuz", preco: 120.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/Moletom com capuz/Moletom com capuz (1).jpg", "images/T-Shirts/Moletom com capuz/Moletom com capuz.jpg", "images/T-Shirts/Moletom com capuz/Moletom com capuz (1).jpg", "images/T-Shirts/Moletom com capuz/Moletom com capuz.jpg", "images/T-Shirts/Moletom com capuz/Moletom com capuz (1).jpg"], descricao: "Moletom com capuz macio, interior felpudo e ajuste relaxado." },
  { id: 62, nome: "Moletom sem capuz", preco: 110.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/Moletom sem capuz/Moletom sem capuz (1).jpg", "images/T-Shirts/Moletom sem capuz/Moletom sem capuz.jpg", "images/T-Shirts/Moletom sem capuz/Moletom sem capuz (1).jpg", "images/T-Shirts/Moletom sem capuz/Moletom sem capuz.jpg", "images/T-Shirts/Moletom sem capuz/Moletom sem capuz (1).jpg"], descricao: "Moletom sem capuz com corte clássico e tecido confortável." },
  { id: 63, nome: "T-shirt", preco: 45.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/T-shirt/T-shirt (1).jpg", "images/T-Shirts/T-shirt/T-shirt (2).jpg", "images/T-Shirts/T-shirt/T-shirt (3).jpg", "images/T-Shirts/T-shirt/T-shirt (4).jpg", "images/T-Shirts/T-shirt/T-shirt (5).jpg"], descricao: "T-shirt básica em algodão suave com caimento moderno." },
  { id: 64, nome: "T-shirt Burberry", preco: 180.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/T-shirt Burberry/T-shirt Burberry (1).jpg", "images/T-Shirts/T-shirt Burberry/T-shirt Burberry (2).jpg", "images/T-Shirts/T-shirt Burberry/T-shirt Burberry.jpg", "images/T-Shirts/T-shirt Burberry/T-shirt Burberry (1).jpg", "images/T-Shirts/T-shirt Burberry/T-shirt Burberry (2).jpg"], descricao: "T-shirt Burberry com estampa clássica e tecido premium." },
  { id: 65, nome: "T-shirt com Manga Corteiz", preco: 75.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/T-shirt com Manga Corteiz/T-shirt com Manga Corteiz (1).jpg", "images/T-Shirts/T-shirt com Manga Corteiz/T-shirt com Manga Corteiz.jpg", "images/T-Shirts/T-shirt com Manga Corteiz/T-shirt com Manga Corteiz (1).jpg", "images/T-Shirts/T-shirt com Manga Corteiz/T-shirt com Manga Corteiz.jpg", "images/T-Shirts/T-shirt com Manga Corteiz/T-shirt com Manga Corteiz (1).jpg"], descricao: "T-shirt Corteiz com manga estampada e vibe streetwear." },
  { id: 66, nome: "T-shirt CORTEIZ", preco: 85.00, categoria: "T-Shirts", imagens: ["images/T-Shirts/T-shirt CORTEIZ/T-shirt CORTEIZ (1).jpg", "images/T-Shirts/T-shirt CORTEIZ/T-shirt CORTEIZ (2).jpg", "images/T-Shirts/T-shirt CORTEIZ/T-shirt CORTEIZ (3).jpg", "images/T-Shirts/T-shirt CORTEIZ/T-shirt CORTEIZ (4).jpg", "images/T-Shirts/T-shirt CORTEIZ/T-shirt CORTEIZ (5).jpg"], descricao: "T-shirt CORTEIZ com múltiplas variações gráficas e corte confortável." },
  { id: 67, nome: "Bag Burberry Paddy", preco: 450.00, categoria: "Bolsas", imagens: ["images/Bolsas/Bag Burberry paddy/IMG-20251214-WA0056.jpg", "images/Bolsas/Bag Burberry paddy/IMG-20251214-WA0078.jpg", "images/Bolsas/Bag Burberry paddy/IMG-20251214-WA0079.jpg", "images/Bolsas/Bag Burberry paddy/IMG-20251214-WA0150.jpg", "images/Bolsas/Bag Burberry paddy/IMG-20251214-WA0056.jpg"], descricao: "Bolsa Burberry Paddy com design clássico em couro premium e cadeado icónico." },
  { id: 68, nome: "Bag Dior", preco: 520.00, categoria: "Bolsas", imagens: ["images/Bolsas/Bag Dior/IMG-20251214-WA0059.jpg", "images/Bolsas/Bag Dior/IMG-20251214-WA0075.jpg", "images/Bolsas/Bag Dior/IMG-20251214-WA0090.jpg", "images/Bolsas/Bag Dior/IMG-20251214-WA0097.jpg", "images/Bolsas/Bag Dior/IMG-20251214-WA0059.jpg"], descricao: "Bolsa Dior com acabamento de luxo, logótipo bordado e estrutura elegante." },
  { id: 69, nome: "Bag Gucci", preco: 540.00, categoria: "Bolsas", imagens: ["images/Bolsas/Bag Gucci/IMG-20251214-WA0071.jpg", "images/Bolsas/Bag Gucci/IMG-20251214-WA0082.jpg", "images/Bolsas/Bag Gucci/IMG-20251214-WA0085.jpg", "images/Bolsas/Bag Gucci/IMG-20251214-WA0089.jpg", "images/Bolsas/Bag Gucci/IMG-20251214-WA0092.jpg"], descricao: "Bolsa Gucci com padrão GG característico e alças em couro ajustáveis." },
  { id: 70, nome: "Bag LV", preco: 560.00, categoria: "Bolsas", imagens: ["images/Bolsas/Bag LV/IMG-20251214-WA0051.jpg", "images/Bolsas/Bag LV/IMG-20251214-WA0058.jpg", "images/Bolsas/Bag LV/IMG-20251214-WA0060.jpg", "images/Bolsas/Bag LV/IMG-20251214-WA0106.jpg", "images/Bolsas/Bag LV/IMG-20251214-WA0114.jpg"], descricao: "Bolsa Louis Vuitton com monograma LV e acabamento refinado em lona tratada." },
  { id: 71, nome: "Bolsa Goyard Belvedere", preco: 580.00, categoria: "Bolsas", imagens: ["images/Bolsas/Bolsa goyard belvedere/IMG-20251214-WA0052.jpg", "images/Bolsas/Bolsa goyard belvedere/IMG-20251214-WA0096.jpg", "images/Bolsas/Bolsa goyard belvedere/IMG-20251214-WA0098.jpg", "images/Bolsas/Bolsa goyard belvedere/IMG-20251214-WA0101.jpg", "images/Bolsas/Bolsa goyard belvedere/IMG-20251214-WA0104.jpg"], descricao: "Bolsa Goyard Belvedere com padrão chevron tradicional e couro resistente." }
];

// FUNÇÕES UTILITÁRIAS
function formatPrice(value) {
  return value.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
}

function openWhatsApp(productName) {
  const url = 'https://t.me/+351930620727';
  window.open(url, '_blank');
}

function escapeHtmlJs(s) {
  return s.replace(/'/g, "\\'").replace(/\"/g, '\\"');
}

// ELEMENTOS DO DOM
let filtersContainer = null;
let filtersMobileContainer = null;
let grid = null;
let categories = [];

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
  filtersContainer = document.getElementById('filtersP');
  filtersMobileContainer = document.getElementById('filtersMobile');
  grid = document.getElementById('productsGridP');
  
  if (filtersContainer || filtersMobileContainer || grid) {
    categories = Array.from(new Set(products.map(p => p.categoria)));
    renderFilters();
    renderProducts(products);
    applyFilter('all');
  }
  
  const yearEl = document.getElementById('yearP');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  addScrollTop();
});

// CRIAÇÃO DE BOTÕES DE FILTRO
function createFilterButton(cat, label) {
  const btn = document.createElement('button');
  btn.className = 'px-3 py-1 rounded-full text-sm bg-white border border-gray-200 shadow-sm hover:bg-gray-100 transition capitalize';
  btn.textContent = label;
  btn.dataset.cat = cat;
  btn.addEventListener('click', () => applyFilter(cat));
  return btn;
}

// RENDERIZAR FILTROS
function renderFilters() {
  if (filtersContainer) filtersContainer.innerHTML = '';
  if (filtersMobileContainer) filtersMobileContainer.innerHTML = '';
  
  if (filtersContainer) filtersContainer.appendChild(createFilterButton('all', 'Todos'));
  if (filtersMobileContainer) filtersMobileContainer.appendChild(createFilterButton('all', 'Todos'));
  
  categories.forEach(cat => {
    if (filtersContainer) filtersContainer.appendChild(createFilterButton(cat, cat));
    if (filtersMobileContainer) filtersMobileContainer.appendChild(createFilterButton(cat, cat));
  });
}

// RENDERIZAR PRODUTOS
function renderProducts(list) {
  if (!grid) return;
  grid.innerHTML = '';
  
  if (list.length === 0) {
    grid.innerHTML = '<div class="col-span-full text-center text-slate-500">Nenhum produto encontrado.</div>';
    return;
  }
  
  list.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition group min-w-0';
    card.itemScope = '';
    card.itemType = 'https://schema.org/Product';
    const cover = (p.imagens && p.imagens.length) ? p.imagens[0] : (p.imagem || 'images/logo.jpg');
    
    card.innerHTML = `
      <div class="w-full h-48 bg-gray-100 overflow-hidden">
        <img src="${cover}" data-src="${cover}" alt="${p.nome}" class="w-full h-full img-cover transition-transform duration-300 group-hover:scale-105" itemProp="image" />
      </div>
      <div class="p-4">
        <h4 class="font-medium text-slate-800" itemProp="name">${p.nome}</h4>
        <meta itemProp="description" content="${p.descricao}" />
        <meta itemProp="category" content="${p.categoria}" />
        <div class="mt-2 flex flex-col gap-2">
          <div class="text-slate-600 text-sm italic whitespace-normal">
            <span itemProp="priceCurrency" content="EUR"></span>
            <span itemProp="availability" content="https://schema.org/InStock">Preço sob consulta</span>
          </div>
          <div class="text-sm text-slate-500 capitalize">${p.categoria}</div>
        </div>
        <div class="mt-4 flex flex-col gap-2">
          <button class="px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-100 transition" onclick="showDescricao(${p.id - 1})">Detalhes</button>
          <button class="px-3 py-2 rounded-md border-2 border-blue-600 text-blue-700 bg-white font-semibold hover:bg-blue-600 hover:text-white transition text-sm" onclick="encomendarProduto('${escapeHtmlJs(p.nome)}')">Encomendar</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

// ENCOMENDAR PRODUTO
function encomendarProduto(nome) {
  const url = 'https://t.me/+351930620727';
  window.open(url, '_blank');
}

// MODAL: DESCRIÇÃO DO PRODUTO
function showDescricao(idx) {
  const p = products[idx];
  const imgs = (p.imagens && p.imagens.length) ? p.imagens.slice(0, 5) : (p.imagem ? [p.imagem] : ['images/logo.jpg', 'images/logo.jpg', 'images/logo.jpg', 'images/logo.jpg', 'images/logo.jpg']);
  
  let modal = document.getElementById('descricaoModal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'descricaoModal';
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-4';
    modal.innerHTML = `
      <div class="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
        <button id="closeModalBtn" class="absolute top-3 right-3 text-slate-400 hover:text-primary text-2xl">&times;</button>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div class="w-full h-72 bg-gray-100 overflow-hidden mb-4">
              <img id="modalMainImg" src="${imgs[0]}" alt="${p.nome}" class="w-full h-full object-contain" />
            </div>
            <div id="modalThumbs" class="flex gap-2 flex-wrap"></div>
          </div>
          <div class="flex flex-col justify-center items-center text-center">
            <h3 class="text-2xl font-semibold mb-2">${p.nome}</h3>
            <p class="text-slate-700 mb-4 leading-relaxed">${p.descricao}</p>
            <div class="text-sm text-slate-500 mb-4">Categoria: <span id="modalCategory" class="capitalize">${p.categoria}</span></div>
            <div id="modalPrice" class="text-lg text-slate-600 italic mt-2">Preço sob consulta</div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    document.getElementById('closeModalBtn').onclick = () => modal.remove();
    
    const thumbs = modal.querySelector('#modalThumbs');
    const mainImg = modal.querySelector('#modalMainImg');
    imgs.forEach((src, i) => {
      const t = document.createElement('img');
      t.src = src;
      t.alt = p.nome + ' ' + (i + 1);
      t.className = 'w-20 h-20 object-cover rounded cursor-pointer border border-gray-200';
      t.onclick = () => {
        mainImg.src = src;
        thumbs.querySelectorAll('img').forEach(img => img.classList.remove('ring-2', 'ring-primary'));
        t.classList.add('ring-2', 'ring-primary');
      };
      thumbs.appendChild(t);
      if (i === 0) t.classList.add('ring-2', 'ring-primary');
    });
  } else {
    modal.querySelector('#modalMainImg').src = imgs[0];
    modal.querySelector('h3').textContent = p.nome;
    modal.querySelector('p').textContent = p.descricao;
    const catEl = modal.querySelector('#modalCategory');
    if (catEl) catEl.textContent = p.categoria;
    const priceEl = modal.querySelector('#modalPrice');
    if (priceEl) priceEl.textContent = formatPrice(p.preco);
    modal.style.display = 'flex';
  }
}

// APLICAR FILTRO
function applyFilter(cat) {
  const btns = [];
  if (filtersContainer) btns.push(...filtersContainer.querySelectorAll('button'));
  if (filtersMobileContainer) btns.push(...filtersMobileContainer.querySelectorAll('button'));
  
  btns.forEach(b => b.classList.remove('ring-2', 'ring-primary'));
  const active = Array.from(btns).find(b => b.dataset.cat === cat);
  if (active) active.classList.add('ring-2', 'ring-primary');
  
  if (cat === 'all') {
    renderProducts(products);
  } else {
    renderProducts(products.filter(p => p.categoria === cat));
  }
}

// SCROLL-TO-TOP BUTTON
function addScrollTop() {
  const btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.className = 'scroll-top-btn fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full scroll-top-transition scroll-top-hidden';
  btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform rotate-180 text-black" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3.293 9.293a1 1 0 011.414 0L10 14.586l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>';
  
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
  
  const showAt = 200;
  function update() {
    const top = window.scrollY || document.documentElement.scrollTop;
    if (top > showAt) {
      btn.classList.remove('scroll-top-hidden');
      btn.classList.add('scroll-top-visible');
    } else {
      btn.classList.remove('scroll-top-visible');
      btn.classList.add('scroll-top-hidden');
    }
  }
  window.addEventListener('scroll', update, { passive: true });
}
