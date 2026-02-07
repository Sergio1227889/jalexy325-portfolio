import { Button } from "@/components/ui/button";
import { Gamepad2, Users, Trophy, Zap, Star, Heart, TrendingUp, Code, Twitch, Youtube, Music } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-sm">J</div>
            <span className="font-bold text-lg">Jalexy325</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#quien-soy" className="text-sm hover:text-purple-400 transition">Quién Soy</a>
            <a href="#especialidades" className="text-sm hover:text-purple-400 transition">Especialidades</a>
            <a href="#comunidad" className="text-sm hover:text-purple-400 transition">Comunidad</a>
          </div>
          <a href="https://www.twitch.tv/jalexy325" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">Sígueme</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                  Jalexy325
                </h1>
                <p className="text-xl text-purple-300 font-semibold">Creador de Contenido | Pokémon Nuzlocke Specialist</p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Bienvenido a La Guarida. Un espacio donde la diversión, la profesionalidad y la autenticidad se encuentran. Aquí creamos contenido de calidad, construimos comunidad y exploramos mundos de juegos con pasión.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://www.twitch.tv/jalexy325" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg">
                    Ver en Vivo
                  </Button>
                </a>
                <a href="https://www.tiktok.com/@jalexy_325" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-6 text-lg">
                    TikTok
                  </Button>
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">708</div>
                  <div className="text-sm text-gray-400">Seguidores</div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">La Guarida</div>
                  <div className="text-sm text-gray-400">Comunidad</div>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">Chill</div>
                  <div className="text-sm text-gray-400">Filosofía</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Gamepad2 className="w-24 h-24 mx-auto mb-4 text-purple-400 opacity-50" />
                  <p className="text-gray-400">Gaming Setup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quién Soy */}
      <section id="quien-soy" className="py-20 border-t border-purple-500/20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-3xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-8 flex items-center justify-center min-h-96">
                <div className="text-center">
                  <Users className="w-24 h-24 mx-auto mb-4 text-blue-400 opacity-50" />
                  <p className="text-gray-400">Comunidad</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quién Soy</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Soy Jalexy, un creador de contenido colombiano apasionado por los videojuegos y la comunidad. Mi misión es crear un espacio donde la diversión y el profesionalismo van de la mano, donde cada stream es una aventura y cada momento cuenta.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  En La Guarida, nos enfocamos en disfrutar de los juegos de manera chill, sin presión, priorizando siempre la calidad del contenido y el respeto mutuo. Creo que los mejores momentos surgen cuando te diviertes siendo auténtico.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-300">Valores Fundamentales</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Autenticidad</p>
                      <p className="text-sm text-gray-400">Siempre genuino, nunca fingido</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Comunidad</p>
                      <p className="text-sm text-gray-400">Construimos juntos, no solos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Calidad</p>
                      <p className="text-sm text-gray-400">Contenido profesional y cuidado</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="py-20 border-t border-purple-500/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Especialidades</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Contenido diverso, cada uno con su propia esencia y dedicación</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-8 hover:border-purple-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pokémon Nuzlocke</h3>
                  <p className="text-sm text-gray-400">Especialidad Principal</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Challenges intensos, estrategia pura y momentos épicos. Los Nuzlocke son mi pasión: cada decisión cuenta, cada Pokémon importa.</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-8 hover:border-green-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-400 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Minecraft</h3>
                  <p className="text-sm text-gray-400">Creativo & Supervivencia</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Construcciones épicas, aventuras sin fin y momentos de pura creatividad. Minecraft es libertad en su forma más pura.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-8 hover:border-blue-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fortnite</h3>
                  <p className="text-sm text-gray-400">Battle Royale Casual</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Acción, diversión y momentos memorables. Fortnite es donde nos relajamos y disfrutamos del gameplay puro.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border border-yellow-500/30 rounded-xl p-8 hover:border-yellow-500/60 transition">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fall Guys</h3>
                  <p className="text-sm text-gray-400">Diversión Pura</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">Caos, risas y competencia amigable. Fall Guys es el juego perfecto para momentos de pura diversión sin presión.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidad */}
      <section id="comunidad" className="py-20 border-t border-purple-500/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">La Guarida</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Nuestra comunidad es el corazón de todo lo que hacemos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6">
              <Users className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold mb-2">Comunidad Respetuosa</h3>
              <p className="text-sm text-gray-400">Un espacio seguro donde todos son bienvenidos</p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold mb-2">Crecimiento Juntos</h3>
              <p className="text-sm text-gray-400">Apoyamos el crecimiento mutuo y la colaboración</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/30 rounded-xl p-6">
              <Star className="w-8 h-8 text-purple-400 mb-3" />
              <h3 className="font-bold mb-2">Momentos Especiales</h3>
              <p className="text-sm text-gray-400">Eventos, giveaways y experiencias únicas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Redes Sociales */}
      <section className="py-20 border-t border-purple-500/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Sígueme</h2>
            <p className="text-gray-400">Conecta conmigo en todas mis redes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <a href="https://www.twitch.tv/jalexy325" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/60 transition">
                <Twitch className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition" />
                <h3 className="font-bold mb-2">Twitch</h3>
                <p className="text-sm text-gray-400">@jalexy325</p>
              </div>
            </a>

            <a href="https://www.tiktok.com/@jalexy_325" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/30 rounded-xl p-8 text-center hover:border-blue-500/60 transition">
                <Music className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition" />
                <h3 className="font-bold mb-2">TikTok</h3>
                <p className="text-sm text-gray-400">@jalexy_325</p>
              </div>
            </a>

            <a href="https://www.youtube.com/@jalexy325" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 border border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/60 transition">
                <Youtube className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition" />
                <h3 className="font-bold mb-2">YouTube</h3>
                <p className="text-sm text-gray-400">@jalexy325</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-12 text-center text-gray-400">
        <div className="container">
          <p>&copy; 2026 Jalexy325. Todos los derechos reservados.</p>
          <p className="text-sm mt-2">La Guarida - Donde la diversión y la profesionalidad se encuentran</p>
        </div>
      </footer>
    </div>
  );
}
