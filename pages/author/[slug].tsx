import { useTranslations } from 'next-intl';

import { getAllAuthorSlugs, getAuthorAndRelatedPosts } from '@/lib/api';

import Avatar from '@/components/author/avatar';
import Container from '@/components/layout/container';
import PageTitle from '@/components/misc/page-title';
import SectionSeparator from '@/components/misc/section-separator';
import Subtitle from '@/components/misc/subtitle';
import MorePosts from '@/components/post/more-posts';
// TODO: render authorBio as portable text+ reneder  authorSocilas

export default function Author({ author, authorPosts }) {
  const t = useTranslations('Titles');
  return (
    <Container type="page" title={author.authorTitle}>
      <main className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <PageTitle>{author.authorTitle}</PageTitle>
        <Avatar
          name={author.authorTitle}
          width={192}
          height={192}
          picture={author.picture}
        />
        <SectionSeparator />
        <Subtitle>
          {t('author_related_articles')}
          {author.authorTitle}
        </Subtitle>
        {authorPosts?.length > 0 && <MorePosts posts={authorPosts} />}
      </main>
    </Container>
  );
}

export async function getStaticPaths({ locales }) {
  const allAuthors = await getAllAuthorSlugs();
  const allPathsWithLocales = allAuthors
    .map((author) =>
      locales.map((locale) => ({
        params: {
          slug: `/author/${author.slug}`
        },
        locale: locale
      }))
    )
    .flat();
  return {
    paths: allPathsWithLocales,
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, locale }) {
  const { authorPosts, ...author } = await getAuthorAndRelatedPosts(locale, params.slug);
  return {
    props: {
      author,
      authorPosts,
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  };
}