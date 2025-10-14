'use client';

import { useState } from 'react';
import { Button } from "../../../components/Button";
import { useLanguage } from "../../../components/LanguageContext";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useLanguage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">{t('contact.form.title')}</h2>

      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800">
            {t('contact.form.success')}
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">
            {t('contact.form.error')}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text mb-2">
            {t('contact.form.name.label')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t('contact.form.name.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text mb-2">
            {t('contact.form.email.label')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t('contact.form.email.placeholder')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-text mb-2">
            {t('contact.form.subject.label')}
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">{t('contact.form.subject.placeholder')}</option>
            <option value="general">{t('contact.form.subject.general')}</option>
            <option value="policy">{t('contact.form.subject.policy')}</option>
            <option value="volunteer">{t('contact.form.subject.volunteer')}</option>
            <option value="media">{t('contact.form.subject.media')}</option>
            <option value="meeting">{t('contact.form.subject.meeting')}</option>
            <option value="other">{t('contact.form.subject.other')}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text mb-2">
            {t('contact.form.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary resize-vertical"
            placeholder={t('contact.form.message.placeholder')}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? t('contact.form.submit.sending') : t('contact.form.submit.default')}
        </Button>
      </form>
    </div>
  );
}
