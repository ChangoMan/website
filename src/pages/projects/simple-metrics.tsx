import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import isBefore from 'date-fns/isBefore';
import parseISO from 'date-fns/parseISO';
import subHours from 'date-fns/subHours';
import { AnimateSharedLayout, motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import useSWR from 'swr';
import Layout from '../../components/layout/layout';
import SEO from '../../components/seo';
import ChartCard from '../../components/simple-metrics/ChartCard';
import ChartPopup from '../../components/simple-metrics/ChartPopup';
import './test.css';

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const swrOptions = {
  revalidateOnFocus: false,
};

const acceptableHoursBetweenReports = 24;

const TIMESTAMP = 'timestamp';

const crumbs = [
  { to: '/projects', title: 'Projects' },
  { title: 'Simple Metrics' },
];

const SimpleMetricsIndex = () => {
  // const [modalId, setModalId] = useState<string | null>(null);
  const [modalId, setModalId] = useState<string | null>('CPU');
  const { data, error } = useSWR(
    '//localhost:3000/api/metrics/system',
    fetcher,
    swrOptions
  );

  console.log({ data: data?.response.cpuCores });

  const system = data?.response.system;
  const lastReportTime = system?.lastReportTime;

  let mightBeDown =
    isBefore(
      parseISO(lastReportTime),
      subHours(new Date(), acceptableHoursBetweenReports)
    ) || !!error;

  mightBeDown = false;

  return (
    <Layout>
      <SEO title="Simple Metrics for Raspberry Pi" />
      <AnimateSharedLayout type="crossfade">
        <div className="max-w-2xl my-0 mx-auto">
          <motion.div
            className="mt-12 mb-8 flex justify-between items-center"
            layoutId={`page-title`}
          >
            <div className="text-left">
              <div className="font-black font-display text-5xl uppercase leading-none">
                Simple Metrics
              </div>
              <div className="font-light font-display text-2xl leading-none">
                for Raspberry Pi
              </div>
            </div>
            {!error && data && (
              <div className="text-5xl">
                {mightBeDown ? (
                  <div className="bg-red-200 rounded-full p-1">
                    <FaExclamationCircle className="text-red-700" />
                  </div>
                ) : (
                  <div className="bg-green-200 rounded-full p-1 flex items-center">
                    <FaCheckCircle className="text-green-600" />
                    {/* <div className="p-2 text-sm">Operational TODO</div> */}
                  </div>
                )}
              </div>
            )}
            {!data && (
              <div className="bg-gray-200 rounded-full p-1 text-5xl ">
                <div
                  className="rounded-full animate-spin border-solid border-4 border-gray-200"
                  style={{
                    borderLeftColor: '#bbb',
                    height: '1em',
                    width: '1em',
                  }}
                ></div>
              </div>
            )}
          </motion.div>

          {!error && data && mightBeDown && (
            <div className="mb-4 flex justify-center">
              <div className="inline-block bg-gray-200 rounded py-2 px-4">
                No metrics reported in the last {acceptableHoursBetweenReports}{' '}
                hours. Verify device is still active.
              </div>
            </div>
          )}
          {error && <div>failed to load</div>}

          {!error && data && (
            <>
              <motion.div className={'grid grid-cols-2 gap-8'}>
                {!modalId && (
                  <>
                    <ChartCard
                      title="CPU"
                      primaryMetric={
                        data?.response.cpuTotal.data[
                          data?.response.cpuTotal.data.length - 1
                        ].y
                      }
                      primaryMetricPrintout={new Intl.NumberFormat('en-US', {
                        style: 'percent',
                      }).format(
                        data?.response.cpuTotal.data[
                          data?.response.cpuTotal.data.length - 1
                        ].y / 100
                      )}
                      data={data?.response.cpuCores}
                      colorScheme={{ scheme: 'dark2' }}
                      onClick={setModalId}
                    />
                    <ChartCard
                      title="RAM"
                      primaryMetric={
                        (data?.response.memory.data[
                          data?.response.memory.data.length - 1
                        ].y /
                          system.memory.total) *
                        100
                      }
                      primaryMetricPrintout={new Intl.NumberFormat('en-US', {
                        style: 'percent',
                      }).format(
                        data?.response.memory.data[
                          data?.response.memory.data.length - 1
                        ].y / system.memory.total
                      )}
                      data={[data?.response.memory]}
                      colorScheme={['#006837']}
                      onClick={setModalId}
                    />
                    <ChartCard
                      title="Disk"
                      primaryMetric={
                        data?.response.disk.data[
                          data?.response.disk.data.length - 1
                        ].y
                      }
                      primaryMetricPrintout={new Intl.NumberFormat('en-US', {
                        style: 'percent',
                      }).format(
                        data?.response.disk.data[
                          data?.response.disk.data.length - 1
                        ].y / system.disk.total
                      )}
                      data={[data?.response.disk]}
                      colorScheme={['#0868AC']}
                      onClick={setModalId}
                    />
                    <ChartCard
                      title="Temp"
                      primaryMetric={
                        data?.response.temperature.data[
                          data?.response.temperature.data.length - 1
                        ].y
                      }
                      primaryMetricPrintout={`${
                        data?.response.temperature.data[
                          data?.response.temperature.data.length - 1
                        ].y
                      } C`}
                      data={[data?.response.temperature]}
                      colorScheme={['#54278F']}
                      onClick={setModalId}
                    />
                  </>
                )}
              </motion.div>

              {modalId && (
                <ChartPopup
                  id={modalId}
                  onClose={() => setModalId(null)}
                  items={data?.response}
                  data={data?.response.cpuCores}
                  colorScheme={{ scheme: 'dark2' }}
                />
              )}

              {!!lastReportTime && parseISO(lastReportTime) && (
                <motion.div
                  className="text-sm text-center mt-8 text-gray-600"
                  layoutId={`report-time`}
                >
                  Reported {formatDistanceToNow(parseISO(lastReportTime))} ago.
                </motion.div>
              )}
            </>
          )}
        </div>
      </AnimateSharedLayout>
    </Layout>
  );
};

export default SimpleMetricsIndex;
