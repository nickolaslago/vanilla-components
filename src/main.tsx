import React from 'react';
import ReactDOM from 'react-dom/client';

import './components/index.css';
import Dropdown from './components/Dropdown/Dropdown';
import DimensionSeries from './components/DimensionSeries/DimensionSeries';
import DonutChart from './components/DonutChart/DonutChart';
import ColumnChart from './components/ColumnChart/ColumnChart';
import SingleValue from './components/SingleValue/SingleValue';
// import Table from './components/Table/Table';
import TextInput from './components/TextInput/TextInput';
import NumberInput from './components/NumberInput/NumberInput';
import DateRangePicker from './components/DateRangePicker/DateRangePicker';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="p-8">
      <br />
      <br />
      <br />
      <Dropdown
        title="test"
        onChange={() => {}}
        property={{
          name: 'customers.country',
          title: 'Country',
          description: null
        }}
        value=""
        options={{
          isLoading: false,
          data: [
            {
              'customers.country': 'Australia'
            },
            {
              'customers.country': 'Belgium'
            },
            {
              'customers.country': 'Germany'
            },
            {
              'customers.country': 'Iceland'
            },
            {
              'customers.country': 'New Zealand'
            },
            {
              'customers.country': 'United Kingdom'
            },
            {
              'customers.country': 'United States'
            }
          ]
        }}
      />
      <DateRangePicker onChange={() => {}} />
      {/* <Table
        columns={[
          {
            name: 'customers.country',
            title: 'Country',
            description: null
          },
          {
            name: 'products.size',
            title: 'Size',
            description: null
          },
          {
            name: 'products.name',
            title: 'Name',
            description: null
          }
        ]}
        maxPageRows={5}
        defaultSort={[
          {
            property: {
              name: 'customers.country',
              title: 'Country',
              __type__: 'dimension',
              nativeType: 'string'
            },
            direction: 'asc'
          },
          {
            property: {
              name: 'products.size',
              title: 'Size',
              __type__: 'dimension',
              nativeType: 'string'
            },
            direction: 'asc'
          },
          {
            property: {
              name: 'products.name',
              title: 'Name',
              __type__: 'dimension',
              nativeType: 'string'
            },
            direction: 'asc'
          }
        ]}
        tableData={{
          isLoading: false,
          data: [
            {
              'customers.country': 'Australia',
              'products.size': 'Big',
              'products.name': 'Ultimate Relaxer'
            },
            {
              'customers.country': 'Australia',
              'products.size': 'Giant',
              'products.name': 'Camo Beanbag Surprise'
            },
            {
              'customers.country': 'Australia',
              'products.size': 'Giant',
              'products.name': 'Suede Tanker'
            },
            {
              'customers.country': 'Australia',
              'products.size': 'Great Big',
              'products.name': 'Cozy Cresh'
            },
            {
              'customers.country': 'Australia',
              'products.size': 'Great Big',
              'products.name': 'Memory Bag with Leather Finish'
            }
          ]
        }}
      />
      <br /> */}
      <div className="h-[500px]">
        <DonutChart
          showLabels
          showLegend
          maxGroups={4}
          count={{
            name: 'courses_in_progress.count',
            title: 'Count',
            description: null
          }}
          title="Courses In Progress"
          groups={{
            name: 'courses_in_progress.full_name',
            title: 'Full Name',
            description: null
          }}
          donut={{
            isLoading: false,
            data: [
              {
                'courses_in_progress.full_name': 'SPHERE F BLOCK',
                'courses_in_progress.count': 38
              },
              {
                'courses_in_progress.full_name': 'Research Skills',
                'courses_in_progress.count': 37
              },
              {
                'courses_in_progress.full_name': 'Journal Test',
                'courses_in_progress.count': 37
              },
              {
                'courses_in_progress.full_name': 'Applying for University',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Creative Problem Solving',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Critical Thinking',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'CV Writing',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Entrepreneurship',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Job Interview Skills',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Making an Impact',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Personal Statement Writing',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Preparing for LNAT',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Preparing for TSA',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Public Speaking',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'University Interview Skills',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Verbal Communication',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Writing Skills',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Resilience',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'Preparing for BMAT',
                'courses_in_progress.count': 36
              },
              {
                'courses_in_progress.full_name': 'SPHERE C Block',
                'courses_in_progress.count': 18
              },
              {
                'courses_in_progress.full_name': 'Questionnaire Journal',
                'courses_in_progress.count': 5
              },
              {
                'courses_in_progress.full_name': 'Study Skills',
                'courses_in_progress.count': 2
              },
              {
                'courses_in_progress.full_name': 'SPHERE EtonX Platform Training',
                'courses_in_progress.count': 1
              }
            ]
          }}
        />
      </div>
      <br />
      <div className="h-[400px]">
        <ColumnChart
          title="Test"
          showLabels
          showLegend
          maxAmountA={5}
          maxAmountB={5}
          xAxisTitle="Countries"
          yAxisTitle="Amount of products"
          count={{
            name: 'products.count',
            title: 'Count',
            description: null
          }}
          groupingB={{
            name: 'products.size',
            title: 'Size',
            description: null
          }}
          groupingA={{
            name: 'customers.country',
            title: 'Country',
            description: null
          }}
          columns={{
            isLoading: false,
            data: [
              {
                'customers.country': 'United States',
                'products.size': 'Giant',
                'products.count': '6'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Giant',
                'products.count': '5'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Giant',
                'products.count': '5'
              },
              {
                'customers.country': 'United States',
                'products.size': 'Huge',
                'products.count': '3'
              },
              {
                'customers.country': 'United States',
                'products.size': 'Massive',
                'products.count': '3'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Big',
                'products.count': '3'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Great Big',
                'products.count': '3'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Big',
                'products.count': '3'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Massive',
                'products.count': '3'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Huge',
                'products.count': '3'
              },
              {
                'customers.country': 'United States',
                'products.size': 'Big',
                'products.count': '3'
              },
              {
                'customers.country': 'United States',
                'products.size': 'Great Big',
                'products.count': '3'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Massive',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Huge',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Massive',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Big',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Super Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Huge',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Massive',
                'products.count': '2'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Super Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'products.size': 'Super Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Great Big',
                'products.count': '2'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Big',
                'products.count': '2'
              },
              {
                'customers.country': 'Iceland',
                'products.size': 'Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Great Big',
                'products.count': '2'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Great Big',
                'products.count': '2'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Giant',
                'products.count': '2'
              },
              {
                'customers.country': 'Iceland',
                'products.size': 'Huge',
                'products.count': '1'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Huge',
                'products.count': '1'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Massive',
                'products.count': '1'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Super Giant',
                'products.count': '1'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Giant',
                'products.count': '1'
              },
              {
                'customers.country': 'Belgium',
                'products.size': 'Huge',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'products.size': 'Super Giant',
                'products.count': '1'
              },
              {
                'customers.country': 'Iceland',
                'products.size': 'Great Big',
                'products.count': '1'
              },
              {
                'customers.country': 'Australia',
                'products.size': 'Big',
                'products.count': '1'
              },
              {
                'customers.country': 'Iceland',
                'products.size': 'Massive',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'products.size': 'Great Big',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'products.size': 'Super Giant',
                'products.count': '1'
              }
            ]
          }}
        />
      </div>
      <br />

      <div className="h-[400px]">
        <DimensionSeries
          date={{
            name: 'transactions.created_at',
            title: 'Created at',
            description: 'The time when the transaction was created'
          }}
          showLabels={false}
          showLegend={true}
          granularity="week"
          count={{
            name: 'products.count',
            title: 'Count',
            description: null
          }}
          xAxisTitle="Date"
          grouping={{
            name: 'customers.country',
            title: 'Country',
            description: null
          }}
          yAxisTitle="Product Count"
          line={{
            isLoading: false,
            data: [
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2017-10-30T00:00:00.000',
                'transactions.created_at': '2017-10-30T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-10-30T00:00:00.000',
                'transactions.created_at': '2017-10-30T00:00:00.000',
                'products.count': '4'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2017-11-06T00:00:00.000',
                'transactions.created_at': '2017-11-06T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2017-11-06T00:00:00.000',
                'transactions.created_at': '2017-11-06T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-11-06T00:00:00.000',
                'transactions.created_at': '2017-11-06T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2017-11-13T00:00:00.000',
                'transactions.created_at': '2017-11-13T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-11-13T00:00:00.000',
                'transactions.created_at': '2017-11-13T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2017-11-20T00:00:00.000',
                'transactions.created_at': '2017-11-20T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2017-11-20T00:00:00.000',
                'transactions.created_at': '2017-11-20T00:00:00.000',
                'products.count': '4'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2017-11-20T00:00:00.000',
                'transactions.created_at': '2017-11-20T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2017-11-20T00:00:00.000',
                'transactions.created_at': '2017-11-20T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-11-20T00:00:00.000',
                'transactions.created_at': '2017-11-20T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2017-11-27T00:00:00.000',
                'transactions.created_at': '2017-11-27T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2017-11-27T00:00:00.000',
                'transactions.created_at': '2017-11-27T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2017-11-27T00:00:00.000',
                'transactions.created_at': '2017-11-27T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-11-27T00:00:00.000',
                'transactions.created_at': '2017-11-27T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2017-12-04T00:00:00.000',
                'transactions.created_at': '2017-12-04T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2017-12-04T00:00:00.000',
                'transactions.created_at': '2017-12-04T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-12-04T00:00:00.000',
                'transactions.created_at': '2017-12-04T00:00:00.000',
                'products.count': '11'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2017-12-11T00:00:00.000',
                'transactions.created_at': '2017-12-11T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2017-12-11T00:00:00.000',
                'transactions.created_at': '2017-12-11T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2017-12-11T00:00:00.000',
                'transactions.created_at': '2017-12-11T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-12-11T00:00:00.000',
                'transactions.created_at': '2017-12-11T00:00:00.000',
                'products.count': '9'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2017-12-18T00:00:00.000',
                'transactions.created_at': '2017-12-18T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2017-12-18T00:00:00.000',
                'transactions.created_at': '2017-12-18T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-12-18T00:00:00.000',
                'transactions.created_at': '2017-12-18T00:00:00.000',
                'products.count': '11'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2017-12-25T00:00:00.000',
                'transactions.created_at': '2017-12-25T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2017-12-25T00:00:00.000',
                'transactions.created_at': '2017-12-25T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2017-12-25T00:00:00.000',
                'transactions.created_at': '2017-12-25T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2017-12-25T00:00:00.000',
                'transactions.created_at': '2017-12-25T00:00:00.000',
                'products.count': '13'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-01-01T00:00:00.000',
                'transactions.created_at': '2018-01-01T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-01-01T00:00:00.000',
                'transactions.created_at': '2018-01-01T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-01-01T00:00:00.000',
                'transactions.created_at': '2018-01-01T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-01-01T00:00:00.000',
                'transactions.created_at': '2018-01-01T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-01-01T00:00:00.000',
                'transactions.created_at': '2018-01-01T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-01-08T00:00:00.000',
                'transactions.created_at': '2018-01-08T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-01-08T00:00:00.000',
                'transactions.created_at': '2018-01-08T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-01-08T00:00:00.000',
                'transactions.created_at': '2018-01-08T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-01-15T00:00:00.000',
                'transactions.created_at': '2018-01-15T00:00:00.000',
                'products.count': '4'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-01-15T00:00:00.000',
                'transactions.created_at': '2018-01-15T00:00:00.000',
                'products.count': '6'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-01-22T00:00:00.000',
                'transactions.created_at': '2018-01-22T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-01-22T00:00:00.000',
                'transactions.created_at': '2018-01-22T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-01-22T00:00:00.000',
                'transactions.created_at': '2018-01-22T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-01-22T00:00:00.000',
                'transactions.created_at': '2018-01-22T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-01-22T00:00:00.000',
                'transactions.created_at': '2018-01-22T00:00:00.000',
                'products.count': '11'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-01-29T00:00:00.000',
                'transactions.created_at': '2018-01-29T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-01-29T00:00:00.000',
                'transactions.created_at': '2018-01-29T00:00:00.000',
                'products.count': '7'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-02-05T00:00:00.000',
                'transactions.created_at': '2018-02-05T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-02-05T00:00:00.000',
                'transactions.created_at': '2018-02-05T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-02-05T00:00:00.000',
                'transactions.created_at': '2018-02-05T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-02-05T00:00:00.000',
                'transactions.created_at': '2018-02-05T00:00:00.000',
                'products.count': '7'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-02-12T00:00:00.000',
                'transactions.created_at': '2018-02-12T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-02-12T00:00:00.000',
                'transactions.created_at': '2018-02-12T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-02-12T00:00:00.000',
                'transactions.created_at': '2018-02-12T00:00:00.000',
                'products.count': '12'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-02-19T00:00:00.000',
                'transactions.created_at': '2018-02-19T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-02-19T00:00:00.000',
                'transactions.created_at': '2018-02-19T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-02-19T00:00:00.000',
                'transactions.created_at': '2018-02-19T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-02-19T00:00:00.000',
                'transactions.created_at': '2018-02-19T00:00:00.000',
                'products.count': '7'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-02-26T00:00:00.000',
                'transactions.created_at': '2018-02-26T00:00:00.000',
                'products.count': '4'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-02-26T00:00:00.000',
                'transactions.created_at': '2018-02-26T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-02-26T00:00:00.000',
                'transactions.created_at': '2018-02-26T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-02-26T00:00:00.000',
                'transactions.created_at': '2018-02-26T00:00:00.000',
                'products.count': '15'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-03-05T00:00:00.000',
                'transactions.created_at': '2018-03-05T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-03-05T00:00:00.000',
                'transactions.created_at': '2018-03-05T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-03-05T00:00:00.000',
                'transactions.created_at': '2018-03-05T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-03-05T00:00:00.000',
                'transactions.created_at': '2018-03-05T00:00:00.000',
                'products.count': '9'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2018-03-12T00:00:00.000',
                'transactions.created_at': '2018-03-12T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-03-12T00:00:00.000',
                'transactions.created_at': '2018-03-12T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-03-12T00:00:00.000',
                'transactions.created_at': '2018-03-12T00:00:00.000',
                'products.count': '9'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-03-19T00:00:00.000',
                'transactions.created_at': '2018-03-19T00:00:00.000',
                'products.count': '13'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2018-03-26T00:00:00.000',
                'transactions.created_at': '2018-03-26T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-03-26T00:00:00.000',
                'transactions.created_at': '2018-03-26T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-03-26T00:00:00.000',
                'transactions.created_at': '2018-03-26T00:00:00.000',
                'products.count': '5'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-04-02T00:00:00.000',
                'transactions.created_at': '2018-04-02T00:00:00.000',
                'products.count': '11'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-04-09T00:00:00.000',
                'transactions.created_at': '2018-04-09T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-04-09T00:00:00.000',
                'transactions.created_at': '2018-04-09T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-04-09T00:00:00.000',
                'transactions.created_at': '2018-04-09T00:00:00.000',
                'products.count': '10'
              },
              {
                'customers.country': 'Australia',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-04-16T00:00:00.000',
                'transactions.created_at': '2018-04-16T00:00:00.000',
                'products.count': '8'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-04-23T00:00:00.000',
                'transactions.created_at': '2018-04-23T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-04-23T00:00:00.000',
                'transactions.created_at': '2018-04-23T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-04-23T00:00:00.000',
                'transactions.created_at': '2018-04-23T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-04-23T00:00:00.000',
                'transactions.created_at': '2018-04-23T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-04-23T00:00:00.000',
                'transactions.created_at': '2018-04-23T00:00:00.000',
                'products.count': '14'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-04-30T00:00:00.000',
                'transactions.created_at': '2018-04-30T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-04-30T00:00:00.000',
                'transactions.created_at': '2018-04-30T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-04-30T00:00:00.000',
                'transactions.created_at': '2018-04-30T00:00:00.000',
                'products.count': '10'
              },
              {
                'customers.country': 'Belgium',
                'transactions.created_at.week': '2018-05-07T00:00:00.000',
                'transactions.created_at': '2018-05-07T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-05-07T00:00:00.000',
                'transactions.created_at': '2018-05-07T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-05-07T00:00:00.000',
                'transactions.created_at': '2018-05-07T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-05-07T00:00:00.000',
                'transactions.created_at': '2018-05-07T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-05-07T00:00:00.000',
                'transactions.created_at': '2018-05-07T00:00:00.000',
                'products.count': '10'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-05-14T00:00:00.000',
                'transactions.created_at': '2018-05-14T00:00:00.000',
                'products.count': '3'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-05-14T00:00:00.000',
                'transactions.created_at': '2018-05-14T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-05-14T00:00:00.000',
                'transactions.created_at': '2018-05-14T00:00:00.000',
                'products.count': '5'
              },
              {
                'customers.country': 'Germany',
                'transactions.created_at.week': '2018-05-21T00:00:00.000',
                'transactions.created_at': '2018-05-21T00:00:00.000',
                'products.count': '2'
              },
              {
                'customers.country': 'Iceland',
                'transactions.created_at.week': '2018-05-21T00:00:00.000',
                'transactions.created_at': '2018-05-21T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'New Zealand',
                'transactions.created_at.week': '2018-05-21T00:00:00.000',
                'transactions.created_at': '2018-05-21T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-05-21T00:00:00.000',
                'transactions.created_at': '2018-05-21T00:00:00.000',
                'products.count': '6'
              },
              {
                'customers.country': 'United Kingdom',
                'transactions.created_at.week': '2018-05-28T00:00:00.000',
                'transactions.created_at': '2018-05-28T00:00:00.000',
                'products.count': '1'
              },
              {
                'customers.country': 'United States',
                'transactions.created_at.week': '2018-05-28T00:00:00.000',
                'transactions.created_at': '2018-05-28T00:00:00.000',
                'products.count': '5'
              }
            ]
          }}
        />
      </div>
      <br />
      <SingleValue
        title=""
        value={{ isLoading: false, data: [] }}
        property={{ name: '', title: '', description: '' }}
      />
      <br />
      <Dropdown
        onChange={() => {}}
        property={{
          name: 'customers.email',
          title: 'Email',
          description: null
        }}
        title="test"
        value="test"
        options={{
          isLoading: false,
          data: [
            {
              'customers.email': 'acouvert1y@csmoncomor.com'
            },
            {
              'customers.email': 'aeberdtq@lulu.com'
            },
            {
              'customers.email': 'alarchier32@theguardian.com'
            },
            {
              'customers.email': 'anisco3q@pen.io'
            },
            {
              'customers.email': 'avalentine2w@blogtalkradio.com'
            },
            {
              'customers.email': 'bbeaka@apache.org'
            },
            {
              'customers.email': 'bbuchanan3g@bloomberg.com'
            }
          ]
        }}
      />
      <br />
      <TextInput onChange={() => {}} value="Chocolate" />
      <br />
      <NumberInput onChange={() => {}} value={12} />
      <br />
    </div>
  </React.StrictMode>
);
