import { useTranslations } from 'next-intl';

import { getFeaturedPosts, getPageContent } from '@/lib/api';

import Search from '@/components/search/search';
import MorePosts from '@/components/post/more-posts';
import SectionSeparator from '@/components/misc/section-separator';
import PageTitle from '@/components/misc/page-title';
import Container from '@/components/layout/container';
import MorepostsControls from '@/components/post/moreposts-controls';
import PostBody from '@/components/post/post-body';
import Subtitle from '@/components/misc/subtitle';

export default function Index({ pageData, pagePosts }) {
  const t = useTranslations('Titles');
  return (
    <Container title={pageData.title} type="page">
      <main className="flex flex-col justify-center items-start max-w-3xl mx-auto pb-16">
        <div id="autocomplete" className="relative w-full">
          <Search />
        </div>
        {pageData && (
          <>
            <PageTitle>{pageData.title}</PageTitle>
            <PostBody content={pageData.body} />
            <SectionSeparator />
            <Subtitle>{t('featured_posts')}</Subtitle>
          </>
        )}
        {pagePosts?.length > 0 && <MorePosts posts={pagePosts} />}
        <MorepostsControls />
      </main>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  const pagePosts = await getFeaturedPosts(locale);
  const pageData = await getPageContent(locale, '/');
  return {
    props: {
      pageData,
      pagePosts,
      messages: (await import(`../messages/${locale}.json`)).default
    }
  };
}
