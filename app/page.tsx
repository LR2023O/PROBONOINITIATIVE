import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionCard from '@/components/SectionCard';
import FadeInSection from '@/components/FadeInSection';
import BackToTop from '@/components/BackToTop';
import LoadingScreen from '@/components/LoadingScreen';
import SubTopicCarousel from '@/components/SubTopicCarousel';
import Gallery from '@/components/Gallery';
import { siteContent as c } from '@/content/siteContent';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';


export default function HomePage() {
  const aboutImage = c.whoWeAre.image;
  
  const socialIcons = {
    Facebook: FaFacebookF,
    LinkedIn: FaLinkedinIn,
    Instagram: FaInstagram,
    X: FaXTwitter,
    TikTok: FaTiktok,
    WhatsApp: FaWhatsapp,
  };

  return (
    <>
      <LoadingScreen orgName={c.org.name} messages={c.loadingMessages} />
      <Navbar name={c.org.name} tagline={c.org.tagline} links={c.nav} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-pbi-900 text-white">
        {c.hero.backgroundImage && (
          <>
            <Image
              src={c.hero.backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pbi-900/80 via-pbi-900/75 to-pbi-900/90" />
          </>
        )}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-pbi-700/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-pbi-600/30 blur-3xl" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
          <Image src="/logo.png" alt={`${c.org.name} logo`} width={120} height={120} className="rounded-full shadow-xl" />
          <h1 className="font-serif text-4xl font-bold leading-tight sm:text-5xl">{c.hero.title}</h1>
          <p className="max-w-2xl text-pbi-100/90 sm:text-lg">{c.hero.body}</p>
          <a
            href="#who-we-are"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-pbi-800 shadow transition-transform hover:-translate-y-0.5 hover:bg-pbi-100"
          >
            {c.hero.buttonLabel}
          </a>
        </div>
      </section>

      <main>
        {/* Who We Are: photo beside the text when an image is set, centered text otherwise */}
        <section id="who-we-are" className="scroll-mt-16 border-t border-pbi-100 bg-white">
          {aboutImage ? (
            <div className="mx-auto max-w-6xl px-6 py-16">
              <FadeInSection className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
                <div>
                  <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pbi-100 text-xl">{'\u2696\uFE0F'}
</span>
                  <h2 className="mb-4 font-serif text-3xl font-bold text-pbi-800">{c.whoWeAre.title}</h2>
                  <p className="whitespace-pre-line text-base leading-relaxed text-gray-600 sm:text-lg">{c.whoWeAre.body}</p>
                </div>

                <div className="relative">
                  {/* Offset frame for depth */}
                  <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-pbi-300" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                    <Image
                      src={aboutImage.src}
                      alt={aboutImage.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          ) : (
            <FadeInSection className="mx-auto max-w-3xl px-6 py-16 text-center">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-pbi-100 text-xl">{'\u2696\uFE0F'}
</span>
              <h2 className="mb-4 font-serif text-3xl font-bold text-pbi-800">{c.whoWeAre.title}</h2>
              <p className="whitespace-pre-line text-base leading-relaxed text-gray-600 sm:text-lg">{c.whoWeAre.body}</p>
            </FadeInSection>
          )}
        </section>

        {/* Vision & Mission & Inspiration */}
        <section id="vision" className="scroll-mt-16 border-t border-pbi-100 bg-pbi-50">
  <div className="mx-auto max-w-6xl px-6 py-16">
    <div className="grid gap-6 sm:grid-cols-2">
      <FadeInSection>
        <SectionCard
          icon={'\u{1F30D}'}
          title={c.vision.title}
          body={c.vision.body}
        />
      </FadeInSection>

      <FadeInSection delayMs={120}>
        <SectionCard
          icon={'\u{1F54A}\uFE0F'}
          title={c.mission.title}
          body={c.mission.body}
        />
      </FadeInSection>
    </div>
    <div className="mt-6">  
    <FadeInSection delayMs={120}>
      <SectionCard
        icon={'\u{1F4A1}'}
        title={c.inspiration.title}
        body={c.inspiration.body}
      />
    </FadeInSection>
    </div>
  </div>
</section>

        {/* Intervention Context: intro + expandable mini cards */}
        <section id="context" className="scroll-mt-16 border-t border-pbi-100 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <FadeInSection className="mb-8 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pbi-100 text-2xl">{'\u{1F4D6}'}</span>
                <h2 className="font-serif text-2xl font-bold text-pbi-800 sm:text-3xl">{c.context.title}</h2>
              </div>
              <p className="whitespace-pre-line text-base leading-relaxed text-gray-600">{c.context.intro}</p>
            </FadeInSection>

            <FadeInSection delayMs={150}>
              <SubTopicCarousel items={c.context.cards} />
            </FadeInSection>
          </div>
        </section>

        {/* Gallery (hidden automatically if there are no images) */}
        {/* {c.gallery.images.length > 0 && (
          <section id="gallery" className="scroll-mt-16 border-t border-pbi-100 bg-pbi-50">
            <div className="mx-auto max-w-6xl px-6 py-16">
              <FadeInSection className="mb-8 max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-pbi-100 text-2xl">📸</span>
                  <h2 className="font-serif text-2xl font-bold text-pbi-800 sm:text-3xl">{c.gallery.title}</h2>
                </div>
                {c.gallery.intro && (
                  <p className="whitespace-pre-line text-base leading-relaxed text-gray-600">{c.gallery.intro}</p>
                )}
              </FadeInSection>

              <FadeInSection delayMs={150}>
                <Gallery images={c.gallery.images} />
              </FadeInSection>
            </div>
          </section>
        )}
*/}
        {/* Partnership */}
        <section id="partnership" className="scroll-mt-16 border-t border-pbi-100 bg-white">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <FadeInSection>
              <div className="rounded-2xl border border-pbi-100 bg-pbi-50/60 p-8 text-center shadow-sm sm:p-10">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">{'\u{1F91D}'}</span>
                <h2 className="mb-4 font-serif text-2xl font-bold text-pbi-800 sm:text-3xl">{c.partnership.title}</h2>
                <p className="whitespace-pre-line text-base leading-relaxed text-gray-600">{c.partnership.body}</p>
              </div>
            </FadeInSection>
          </div>
        </section>

        
       
{/* Contact Us */}
<section
  id="contact"
  className="scroll-mt-16 border-t border-pbi-100 bg-pbi-50"
>
  <div className="mx-auto max-w-6xl px-6 py-16">
    <FadeInSection className="mb-10 text-center">
      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">
        {'\u2709\uFE0F'}
      </span>

      <h2 className="mb-4 font-serif text-3xl font-bold text-pbi-800">
        {c.contact.title}
      </h2>

      <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600">
        {c.contact.intro}
      </p>
    </FadeInSection>

    {/* Contact Information Cards */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      
{/* Business Email */}
<FadeInSection>
  <div className="h-full rounded-2xl border border-pbi-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">
      {'\u2709\uFE0F'}
    </div>

    <h3 className="mb-2 text-lg font-bold text-pbi-800">
      Business Email
    </h3>

    <p className="mb-5 text-sm leading-relaxed text-gray-500">
      Contact our leadership team for inquiries and partnerships.
    </p>

    <div className="space-y-5">
      {c.contact.contacts.map((person) => (
        <div key={person.email}>
          <p className="font-semibold text-pbi-800">
            {person.name}
          </p>

          <p className="mb-2 text-xs text-gray-500">
            {person.position}
          </p>

          <a
            href={`mailto:${person.email}`}
            className="break-words text-sm font-semibold text-pbi-700 transition-colors hover:text-pbi-900 hover:underline"
          >
            {person.email}
          </a>
        </div>
      ))}
    </div>
  </div>
</FadeInSection>

{/* Phone Numbers */}
<FadeInSection delayMs={100}>
  <div className="h-full rounded-2xl border border-pbi-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">
      {'\u{1F4DE}'}
    </div>

    <h3 className="mb-2 text-lg font-bold text-pbi-800">
      Call Us
    </h3>

    <p className="mb-5 text-sm leading-relaxed text-gray-500">
      Reach our leadership team for inquiries and collaboration.
    </p>

    <div className="space-y-5">
      {c.contact.contacts.map((person) => (
        <div key={person.phone}>
          <p className="font-semibold text-pbi-800">
            {person.name}
          </p>

          <p className="mb-2 text-xs text-gray-500">
            {person.position}
          </p>

          <a
            href={`tel:${person.phone.replace(/[^\d+]/g, '')}`}
            className="font-semibold text-pbi-700 transition-colors hover:text-pbi-900 hover:underline"
          >
            {person.phone}
          </a>
        </div>
      ))}
    </div>
  </div>
</FadeInSection>


      {/* Physical Address */}
<FadeInSection delayMs={150}>
  <div className="h-full rounded-2xl border border-pbi-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">
      {'\u{1F4CC}'}
    </div>

    <h3 className="mb-2 text-lg font-bold text-pbi-800">
      Physical Address
    </h3>

    <p className="mb-4 text-sm leading-relaxed text-gray-500">
      Find us at our physical location:
    </p>

    <a
      href="https://www.google.com/maps/search/?api=1&query=Nile+Beach+Hotel%2C+near+Juba+National+Stadium"
      target="_blank"
      rel="noopener noreferrer"
      className="break-words font-semibold text-pbi-700 transition-colors hover:text-pbi-900 hover:underline"
    >
      {c.contact.address}
    </a>

    <p className="mt-3 text-xs text-gray-400">
      Open location in Google Maps using the above link.
    </p>
  </div>
</FadeInSection>

      {/* Social Media */}
      <FadeInSection delayMs={200}>
        <div className="h-full rounded-2xl border border-pbi-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pbi-100 text-2xl">
            {'\u{1F30D}'}
          </div>

          <h3 className="mb-2 text-lg font-bold text-pbi-800">
            Connect With Us
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-gray-500">
            Follow our work, updates, and community initiatives.
          </p>

          <div className="flex flex-wrap gap-3">
            {c.contact.socialMedia.map((social) => {
              const SocialIcon =
                socialIcons[social.name as keyof typeof socialIcons];

              if (!SocialIcon) return null;

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.name} page`}
                  title={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-pbi-100 bg-pbi-50 text-lg text-pbi-800 transition-all duration-200 hover:-translate-y-1 hover:bg-pbi-800 hover:text-white"
                >
                  <SocialIcon aria-hidden="true" />
                </a>
              );
            })}
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Follow Pro Bono Initiative online.
          </p>
        </div>
      </FadeInSection>

    </div>

    {/* Partnership Invitation */}
    <FadeInSection delayMs={150}>
      <div className="mt-8 rounded-2xl bg-pbi-900 px-6 py-8 text-center text-white sm:px-10">
        <h3 className="mb-3 font-serif text-xl font-bold sm:text-2xl">
          Let&apos;s Work Together
        </h3>

        <p className="mx-auto mb-6 max-w-2xl leading-relaxed text-pbi-100">
          Join us in advancing access to justice, promoting human
          rights, and protecting vulnerable communities.
        </p>

        <a
  href={`mailto:${c.contact.contacts[0].email}?subject=${encodeURIComponent(
    'Partnership Inquiry - Pro Bono Initiative'
  )}`}
  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-pbi-800 transition-all hover:-translate-y-0.5 hover:bg-pbi-100"
>
  Contact Us
  <span className="ml-2" aria-hidden="true">
    {'\u27A1\uFE0F'}
  </span>
</a>
      </div>
    </FadeInSection>
  </div>
</section>
      </main>

      <Footer name={c.org.name} note={c.org.footerNote} />
      <BackToTop />
    </>
  );
}
